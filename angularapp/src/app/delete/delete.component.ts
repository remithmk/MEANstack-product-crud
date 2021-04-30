import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[ProductService]
})
export class DeleteComponent implements OnInit {

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
onDelete(_id:string,form: NgForm){
this.productService.deleteProduct(_id).subscribe(
  (res)=>{
    this.refreshProductList();
  })
}
}