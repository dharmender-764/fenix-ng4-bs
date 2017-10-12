import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'orderdetails-root',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})

export class OrderDetailsComponent implements OnInit {
  public orderDetails: any;
  modalReference: any;
  orderId: string;
  email: string;
  phone: string;

  constructor(private http: Http, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {  
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.orderId = params['orderId'] || '';
        this.email = params['email'] || '';
        this.phone = params['phone'] || '';
      });
    this.http.post('http://localhost:9090/apiservices/orderdetails', {
      orderId: this.orderId,
      email: this.email,
      phone: this.phone
    })
    .subscribe(res => {
      this.orderDetails = res.json();
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
