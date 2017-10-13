import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URL  } from "./../constants";

@Component({
  selector: 'returnstep1-root',
  templateUrl: './returnstep1.component.html',
  styleUrls: ['./returnstep1.component.css']
})
export class ReturnStep1Component {
  public productDetails: any;
  modalReference: any;
  orderId: string;
  orderItemId: string;
  productId: string;
  reasonId = "1";

  reasons = [
    {
        id: 1,
        description: 'Damaged product'
    },
    {
        id: 2,
        description: 'Missing parts/accessories'
    },
    {
        id: 3,
        description: 'No longer needed'
    },
    {
        id: 4,
        description: 'Got better deal'
    },
    {
        id: 5,
        description: 'Item arrived too late'
    },
    {
        id: 6,
        description: 'Wrong item'
    },
    {
        id: 7,
        description: 'Inaccurate description'
    },
    {
        id: 8,
        description: 'Not as expected'
    }
]

  constructor(private http: Http, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {  
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.orderId = params['orderId'] || '';
        this.orderItemId = params['orderItemId'] || '';
        this.productId = params['productId'] || '';
      });
    let params = 'orderId=' + this.orderId + '&orderItemId=' + this.orderItemId + '&productId=' + this.productId;
    this.http.get(API_URL + '/refund_step1?' + params)
    .subscribe(res => {
      let resjson = res.json();
      this.productDetails = resjson.productDetails;
      this.orderId = resjson.orderId;
    });
  }

  public yes() {
    this.close();
    this.router.navigate(['/cancelReturn'], { queryParams: {orderId: this.orderId} });
  }

  public continue() {
    let params = {orderId: this.orderId, orderItemId: this.orderItemId, productId: this.productId, returnReasonId: this.reasonId, returnMode: ''}
    this.router.navigate(['/returnstep2'], { queryParams: params });
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
