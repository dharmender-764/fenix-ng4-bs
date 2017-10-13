import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URL  } from "./../constants";

@Component({
  selector: 'returnstep3-root',
  templateUrl: './returnstep3.component.html',
  styleUrls: ['./returnstep3.component.css']
})
export class ReturnStep3Component {
  public productDetails: any;
  modalReference: any;
  orderId: string;
  orderItemId: string;
  productId: string;
  returnReasonId: string;
  returnReasonString: string;
  returnMode: string;

  constructor(private http: Http, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {  
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.orderId = params['orderId'] || '';
        this.orderItemId = params['orderItemId'] || '';
        this.productId = params['productId'] || '';
        this.returnReasonId = params['returnReasonId'] || '';
        this.returnMode = params['returnMode'] || '';
      });
    let params = 'orderId=' + this.orderId + '&orderItemId=' + this.orderItemId + '&productId=' + this.productId + "&returnReasonId=" + this.returnReasonId + "&returnMode=" + this.returnMode;
    this.http.get(API_URL + '/refund_step3?' + params)
    .subscribe(res => {
      let resjson = res.json();
      this.productDetails = resjson.productDetails;
      this.returnReasonString = resjson.returnReasonString;
    });
  }

  public confirm() {
    let params = {orderId: this.orderId, orderItemId: this.orderItemId}
    this.router.navigate(['/confirm'], { queryParams: params });
  }

  public yes() {
    this.close();
    this.router.navigate(['/cancelReturn'], { queryParams: {orderId: this.orderId} });
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
