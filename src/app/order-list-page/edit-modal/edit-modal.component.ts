import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {firestore} from 'firebase';
import SetOptions = firebase.firestore.SetOptions;

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  theFormGroup: FormGroup;
  @Input() order: Object;
  @Output() closeEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.theFormGroup = new FormGroup({
      'phone': new FormControl(this.order['phone'], Validators.required),
      'fio': new FormControl(this.order['fio'], Validators.required),
      'address': new FormControl(this.order['address'], Validators.required),
      'time': new FormControl(this.order['time'], Validators.required),
      'comment': new FormControl(this.order['comment'], Validators.required),
      'photoFile': new FormControl()
    });
  }

  getOrder() {
    return {
      'id': this.order['id'],
      'phone': this.theFormGroup.controls['phone'].value,
      'fio': this.theFormGroup.controls['fio'].value,
      'address': this.theFormGroup.controls['address'].value,
      'time': this.theFormGroup.controls['time'].value,
      'comment': this.theFormGroup.controls['comment'].value,
      'photoFile': this.theFormGroup.controls['photoFile'].value,
    }
  }

  saveOrder() {
    firebase.firestore().collection('orders').doc(this.order['id']).update(this.getOrder());
    this.closeEmitter.emit(this.getOrder());
  }

  hideModal() {
    this.closeEmitter.emit(null);
  }
}
