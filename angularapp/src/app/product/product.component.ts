        

import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
   constructor(private productService:ProductService) { }

  ngOnInit() {
    this.restForm();
    this.refreshProductList();
    
    
  }
  restForm(form?:NgForm){
    if(form)
    form.reset()
    this.productService.selectedProduct={  
        _id:"",
        name:"",
        status:"",
        price:null,
        brand:"",
        care:"",
        category:"",
        colour:"",
        material:"",
        size:null
    }

  }
  onSubmit(form: NgForm) 
  {
    if(form.value._id=='')
    {
    this.productService.postProduct(form.value).subscribe((res) =>{
        this.restForm(form);
        this.refreshProductList();
        });
    }
   else
    {
      this.productService.putProduct(form.value).subscribe((res) =>{
        this.restForm(form);
        this.refreshProductList();
        });
    }
      }
refreshProductList(){
  this.productService.getProductList().subscribe((res)=>{
    this.productService.product=res as Product[];
  })

}
}

