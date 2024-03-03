import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[ProductsService,HttpClient],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent implements OnInit{

 
  products_list: any = [];
  productChunks: any[][] = [];

  constructor(public myclient: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  // getAllProducts()
  // {
  //   this.myclient.getData().subscribe(result=>{this.products_list=result})
  // }

  //typeof user !== 'undefined'

  getAllProducts() {
    this.myclient.getData().subscribe(
      result => {
        if (typeof result !== 'undefined') {
          this.products_list = result;
          this.productChunks = this.chunkArray(this.products_list, 4);
          console.log('Product Chunks:', this.productChunks);
        } else {
          console.error('Error: No products returned from server.');
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  chunkArray(myArray: any[], chunkSize: number) {
    if (!myArray) {
      console.error('Input array is undefined or null');
      return [];
    }
    
    const arrayLength = myArray.length;
    const tempArray: any[][] = [];
    
    for (let index = 0; index < arrayLength; index += chunkSize) {
        const myChunk = myArray.slice(index, index + chunkSize);
        tempArray.push(myChunk);
    }

    return tempArray;
  }

  navigateToBack() {
    this.router.navigate(['/Login']);
  }

}
