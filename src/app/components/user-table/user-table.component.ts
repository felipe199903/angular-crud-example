import { PeopleService } from "./../../services/people.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { UntypedFormBuilder } from "@angular/forms";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.css"],
})
export class UserTableComponent implements OnInit {
  peoples: any;
  peopleForm: any;
  nameEdit: string = "";
  usernameEdit: string = "";
  telefoneEdit: string = "";
  emailEdit: string = "";
  nameCreate: string = "";
  usernameCreate: string = "";
  telefoneCreate: string = "";
  emailCreate: string = "";
  indexEdit: any = "";
  nameValue: any = "";
  mostrar: boolean = false;
  delete: boolean = false;
  isLoading: boolean = true;

  constructor(
    private peopleService: PeopleService,
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit() {
    this.getAllPeoples();
  }

  public createPeopleForm() {
    this.peopleForm = this.formBuilder.group({
      forName: [null],
    });
    console.log(this.peopleForm);
  }

  public getAllPeoples() {
    this.peopleService.getAllPeoples().subscribe(
      (data) => {
        this.peoples = data;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public createPeople(
    nameValue: string,
    usernameValue: string,
    telefoneValue: string,
    emailValue: string
  ) {
    this.peopleService
      .createPeople(nameValue, usernameValue, telefoneValue, emailValue)
      .subscribe(
        (data) => {
          this.getAllPeoples();
          console.log(this.indexEdit);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  public del(indexValue: number) {
    Swal.fire({
      title: "Tem certeza?",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.value) {
        Swal.close();
        this.peopleService.deletePeople(indexValue).subscribe(
          () => {
            this.getAllPeoples();
          },
          (error) => console.log(error)
        );
      }
    });
    this.indexEdit = indexValue;
  }

  public edit(indexValue: number, nameValue: string) {
    console.log(indexValue);
    console.log(nameValue);
    this.indexEdit = indexValue;
  }

  public open(
    indexValue: number,
    nameValue: string,
    usernameValue: string,
    telefoneValue: string,
    emailValue: string
  ) {
    this.peopleService
      .edit(indexValue, nameValue, usernameValue, telefoneValue, emailValue)
      .subscribe(
        (data) => {
          this.getAllPeoples();
          console.log(indexValue, nameValue);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  toggle() {
    this.mostrar = !this.mostrar;
    this.delete = !this.delete;
    console.log(this.indexEdit);
  }
}
