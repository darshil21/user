import { Component, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';
import { product } from './productmodel';
import { Router } from '@angular/router';
import { product_cat } from "./product_cat_model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product: product[] = [];
  constructor(public _data: HomedataService, public _router: Router) { }

  ngOnInit() {
    this._data.getProductAndCat().subscribe(
      (data: any) => { this.product = data },
      function (e) { alert(e); },
      function () { }
    )
  }


}
