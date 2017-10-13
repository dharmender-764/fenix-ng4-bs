import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'returnstep2-root',
  templateUrl: './returnstep2.component.html',
  styleUrls: ['./returnstep2.component.css']
})
export class ReturnStep2Component {
  public productDetails: any;
  modalReference: any;
  orderId: string;
  orderItemId: string;
  productId: string;
  returnReasonId: string;
  returnMode: string;
  returnReasonString: string;

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
    this.http.get('http://localhost:9090/apiservices/refund_step2?' + params)
    .subscribe(res => {
      let resjson = res.json();
      this.productDetails = resjson.productDetails;
      this.returnReasonString = resjson.returnReasonString;
    });
  }

  public yes() {
    this.close();
    this.router.navigate(['/cancelReturn'], { queryParams: {orderId: this.orderId} });
  }

  public continue() {
    let params = {orderId: this.orderId, orderItemId: this.orderItemId, productId: this.productId, returnReasonId: this.returnReasonId, returnMode: this.returnMode}
    this.router.navigate(['/returnstep3'], { queryParams: params });
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
