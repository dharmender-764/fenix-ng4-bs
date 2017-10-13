import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URL  } from "./../constants";

@Component({
  selector: 'confirm-root',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  public productDetails: any;
  modalReference: any;
  orderId: string;
  orderItemId: string;
  confirmationNumber: string;

  constructor(private http: Http, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {  
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.orderId = params['orderId'] || '';
        this.orderItemId = params['orderItemId'] || '';
      });
    let params = 'orderId=' + this.orderId + '&orderItemId=' + this.orderItemId;
    this.http.get(API_URL + '/confirm?' + params)
    .subscribe(res => {
      let resjson = res.json();
      this.confirmationNumber = resjson.confirmationNumber;
    });
  }

  public open(modal)
  {
    this.modalReference = this.modalService.open(modal);
  }

  public close()
  {
    this.modalReference.close();
  }
}
