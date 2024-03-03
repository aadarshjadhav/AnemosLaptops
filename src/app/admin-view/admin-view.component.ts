import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers:[ProductsService],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {

  

  prodform!:FormGroup
  products_list:any
  isupdate!:boolean
  constructor(public myclient:ProductsService,public fb:FormBuilder)
  {

  }
  ngOnInit(): void {
    
    this.getAllEmp()

    this.prodform=this.fb.group({

      id:[,Validators.required],
      img:[,Validators.required],
      name:[,Validators.required],
      price:[,Validators.required],
      description:[,Validators.required],


    })
    
  }

  getAllEmp()
  {
    this.myclient.getData().subscribe(result=>{this.products_list=result})
  }

  // get id()
  // {
  //   return this.prodform.get('id')
  // }

  // get fname()
  // {
  //   return this.prodform.get('fname')
  // }

  // get salary()
  // {
  //   return this.prodform.get('salary')
  // }


  deleteProd(id:any)
  {
    let res=confirm('Do you want to delete'+ id+'?')

    if(res==true)
    {
      this.myclient.deleteData(id).subscribe(result=>{
        this.getAllEmp()
      })
    }
  }

  editProd(prod:any)
  {
    this.isupdate=true

    this.prodform.setValue({

      id:prod.id,
      img:prod.img,
      name:prod.name,
      price:prod.price,
      description:prod.description

    })
  }

  saveDate_ts()
  {
    let prod=this.prodform.value
    
    // console.log(prod)
    if(!this.isupdate)
    {
      this.myclient.saveData(prod).subscribe(rersult=>{})
    }
    else
    {
      let id =parseInt(this.prodform.value.id)
      this.myclient.updateProd(id,prod).subscribe(result=>{})
    }

    this.getAllEmp()
    this.isupdate=false

    this.prodform.reset()
  }

  clearForm()
  {
    this.prodform.reset()
  }

}
