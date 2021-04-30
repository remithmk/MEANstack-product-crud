import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  providers:[ProductService]
})
export class ReadComponent implements OnInit {

  constructor(private productService:ProductService) { }
  ngOnInit() {
    this.refreshProductList();   
  }
  onSubmit(form: NgForm) 
  {
    if(form.value._id=='')
    {
    this.productService.postProduct(form.value).subscribe((res) =>{      
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
