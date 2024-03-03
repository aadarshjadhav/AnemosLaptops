import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, catchError,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyuserlistService {

  url="http://localhost:3001/userlist_data"
  constructor(public myhttpclient:HttpClient) { }

  
  getData()
  {
    return this.myhttpclient.get(this.url)
  }

  
  saveData(userdata:any):Observable<any>{

    let userdat={id:userdata.id,fullname:userdata.fullname,
      username:userdata.username,email:userdata.email,
      password:userdata.password,accept_terms:userdata.accept_terms, isadmin:false}
    
    return this.myhttpclient.post<any>(this.url,userdat).pipe(
      catchError(this.errorHandler)
    )

  }

  // checkData(userdata:any)
  // {

  // }

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
