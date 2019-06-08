import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-jssf-login',
  templateUrl: './jssf-login.component.html',
  styleUrls: ['./jssf-login.component.scss']
})
export class JSSFLoginComponent implements OnInit, OnChanges {
  @Output() userDetailObj: EventEmitter<object> = new EventEmitter();
  form: any;

  @Input() isUsername: boolean;
  @Input() isPassword: boolean;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnChanges(changes: SimpleChanges) {
  }

  public userDetails(formValues:any) {
    this.userDetailObj.emit(formValues);
  }

}
