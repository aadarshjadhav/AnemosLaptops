import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="http://localhost:3000/product_data"
  constructor(public myhttpclient:HttpClient) { }

  
  getData()
  {
    return this.myhttpclient.get(this.url)
  }

  deleteData(id:any):Observable<any>{
    console.log("hii")
    return this.myhttpclient.delete<any>(this.url+"/"+id).pipe(
      catchError(this.errorHandler)
    )
  }

  saveData(product:any):Observable<any>{

    let product_data={id:product.id, name:product.name,price:parseInt(product.price),img:product.img,description:product.description}

    return this.myhttpclient.post<any>(this.url,product_data).pipe(
      catchError(this.errorHandler)
    )

  }

  public updateProd(id:any,prod:any):Observable<any>{

    return this.myhttpclient.put<any>(`${this.url}/${id}`,prod).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any)
  {
    let errorMessage=""

    if(error.error instanceof ErrorEvent)
    {
      errorMessage=error.error.message
    }
    else
    {
      errorMessage=`Error Code: ${error.status} \n Message:${error.message}`
    }

    console.log(errorMessage)
    return throwError(()=> new Error(errorMessage))

  }

}
