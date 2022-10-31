import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.css']
})
export class AddUserButtonComponent implements OnInit {
  @Input() label:string = '';
  @Input() color:string = 'primary';
  @Input() icon:string = '';


  constructor() { }

  ngOnInit() {
  }

}
