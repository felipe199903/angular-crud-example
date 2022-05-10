import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  peoples: any;
  peopleForm: any;

  constructor(
    private peopleService: PeopleService,
    private formBuilder: FormBuilder) { }

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
    }, error => {
      console.log(error);
    }
    );
  }

}
