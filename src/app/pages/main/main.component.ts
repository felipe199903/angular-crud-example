import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  peoples: any;
  peopleForm: any;
  nameEdit:string = "";
  indexEdit:any ="";
  nameValue:any = "";
  mostrar: boolean = false;
  delete:boolean = false;


  constructor(
    private peopleService: PeopleService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.createPeopleForm();
    this.getAllPeoples();
  }

  public createPeopleForm() {
    this.peopleForm = this.formBuilder.group({
      forName: [null]
    });
    console.log(this.peopleForm);
  }

  public getAllPeoples() {
    this.peopleService.getAllPeoples().subscribe(data => {
      this.peoples = data;
      
    }, error => {
      console.log(error);
    }
    );
  }

  public createPeople() {
    this.peopleService.createPeople(this.peopleForm.controls.forName.value).subscribe(data => {
      this.getAllPeoples();
      console.log(this.indexEdit)
      
    }, error => {
      console.log(error);
    }
    );
  }
  public del(indexValue:number){

    Swal.fire({
      title: 'Tem certeza?',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
  }).then(
      (result) => {
          if (result.value) {
              Swal.close();
              this.peopleService
                  .deletePeople(indexValue)
                  .subscribe(() => {
                    this.getAllPeoples();
                  },
                      (error) => console.log(error)
                  )
          }
      });

    this.indexEdit = indexValue
    console.log(this.delete, indexValue,this.indexEdit)
    if(this.delete == true){ this.peopleService.deletePeople(indexValue).subscribe(data => {
      this.getAllPeoples();
      this.delete = !this.delete;
    }, error => {
      console.log(error);
    }
    )
  } else{
    this.delete = !this.delete
    this.indexEdit = indexValue
  };
}

  public edit(indexValue:number, nameValue: string){
    console.log(indexValue);
    this.indexEdit = indexValue;
  }
  public open(indexValue:number, nameValue: string){
    this.peopleService.edit(indexValue, nameValue).subscribe(data =>{
      this.getAllPeoples();
      console.log(indexValue,nameValue)
      
    }, error =>{
      console.log(error)
    }
    );
  }
  toggle () {
    this.mostrar = !this.mostrar;
    this.delete = !this.delete;
    console.log(this.indexEdit)
  }
}
