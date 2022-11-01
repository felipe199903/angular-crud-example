import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserButtonComponent } from './../src/app/components/core/buttons/add-user-button/add-user-button.component';
import { UserTableComponent } from './../src/app/components/user-table/user-table.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainComponent } from '../src/app/pages/main/main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        FormsModule, 
        ReactiveFormsModule
      ],
      declarations: [
        MainComponent, 
        UserTableComponent, 
        AddUserButtonComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
