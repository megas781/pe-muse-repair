import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {firestore} from 'firebase';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})

export class OrderListPageComponent implements OnInit {

  //Переменная объекта формы
  theFormGroup: FormGroup;

  //Массив для хранения записей в прилиложении
  orderArray = [];

  editableOrder: Object = null;

  constructor() {}

  ngOnInit() {
    //Инициализация формы
    this.theFormGroup = new FormGroup({
      'phone': new FormControl(null, Validators.required)
    });
  }

  /**
   * Метод извлечения данных с удаленного сервера
   */
  fetchOrdersForNumber() {
    let self = this;
    //Обращение к удаленной базе данных
    firebase.firestore()
      //Фильтрация по номеру телефона
      .collection('orders').where('phone', '==', this.theFormGroup.controls['phone'].value)
      //Получение данных
      .get()
      //Обработка данных
      .then(function(value) {
        value.docs.forEach(function(value, index, array) {
          let order = value.data();
          order.id = value.id;
          self.orderArray.push(order);
        });
      });
  }

  /**
   * Метод удаления записи.
   * @param id - строковый индентификатор записи, которую нужно удалить
   */
  deleteOrder(id: string) {
    let self = this;
    //Удаление данных в облачном хранилище
    firestore().collection('orders').doc(id).delete();
    //Удаление записи в приложении
    this.orderArray.forEach(function(value, index, array) {
      if (value.id == id) {
        self.orderArray.splice(index, 1);
      }
    });
  }
  showEditModal(id: string) {
    let self = this;
    this.orderArray.forEach(function(value, index, array) {
      if (value['id'] == id) {
        self.editableOrder = value;
      }
    });
    console.log(this.editableOrder);
  }

  handleCloseEditWithSave(updatedOrder) {
    if (updatedOrder != null) {
      this.orderArray.forEach(function(value, index, array) {
        console.log(value.id);
        console.log(updatedOrder);
        if (value.id == updatedOrder.id) {
          console.log('делаем,');
          value.phone = updatedOrder.phone;
          value.fio = updatedOrder.fio;
          value.address = updatedOrder.address;
          value.time = updatedOrder.time;
          value.comment = updatedOrder.comment;
        }
      });
    }
    this.editableOrder = null;
  }
}
