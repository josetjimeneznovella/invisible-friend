import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {

  public form: FormGroup;

  public count: number = 0;

  public isHiddingPassword: boolean = true;

  public isShowingLoading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar) {

    this.form = formBuilder.group({
      'password': ''
    })
  }

  ngOnInit(): void {
  }

  submit() {
    
    if(this.form.controls['password'].value === 'Vesubio') {
      this.router.navigate(['second-question']);
    } else {
      this.count = this.count + 1;
      this.isShowingLoading = false;

      let message = "Nooorrrr. Error..."
      if(this.count > 2){
        message = "¡Te has enganchao!. ¡Sigue intentándolo!";
      }
       

      this.matSnackBar.open(message, "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });
    }




  }

}
