import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {firestore} from 'firebase';

@Component({
  selector: 'app-modal-order-repair',
  templateUrl: './modal-order-repair.component.html',
  styleUrls: ['./modal-order-repair.component.css']
})
export class ModalOrderRepairComponent implements OnInit {

  theFormGroup: FormGroup;

  constructor() { }

  @Output() closeEmitter = new EventEmitter();
  getOrder() {
    return {
      'phone': this.theFormGroup.controls['phone'].value,
      'fio': this.theFormGroup.controls['fio'].value,
      'address': this.theFormGroup.controls['address'].value,
      'time': this.theFormGroup.controls['time'].value,
      'comment': this.theFormGroup.controls['comment'].value,
      'photoFile': this.theFormGroup.controls['photoFile'].value,
    }
  }

  ngOnInit() {

    this.theFormGroup = new FormGroup({
      'phone': new FormControl(null, Validators.required),
      'fio': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required),
      'photoFile': new FormControl(null)
    });
  }

  createOrder() {
    let order = this.getOrder();
    console.log(order);
    firebase.firestore().collection('orders').add(order).then(function(value) {
      console.log(value);
    });
    this.closeEmitter.emit();
  }


  hideModal() {
    // this.theFormGroup.
    this.closeEmitter.emit();
  }
}
