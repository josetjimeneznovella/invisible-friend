import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent implements OnInit {

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
    
    if(this.form.controls['password'].value === '1:31.447') {
      this.router.navigate(['third-question']);
    } else {

      this.count = this.count + 1;
      this.isShowingLoading = false;

      let message = "Nooorrrr. Error..."
      if(this.count > 3){
        message = "¡Presta atención!. Demasiado rápido… ¿o no?";
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

