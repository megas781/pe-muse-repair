import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceDetailService} from '../service-detail.service';

@Component({
  selector: 'app-service-detail-page',
  templateUrl: './service-detail-page.component.html',
  styleUrls: ['./service-detail-page.component.css']
})
export class ServiceDetailPageComponent implements OnInit {

  category = "";

  service = {};

  constructor(private serviceDetailService: ServiceDetailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.serviceDetailService
    let self = this;
    this.route.params.subscribe(function(params) {
      self.service = self.serviceDetailService.contents[params["category"]];
    });
  }

}
