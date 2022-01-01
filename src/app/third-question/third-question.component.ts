import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.css']
})
export class ThirdQuestionComponent implements OnInit {

  public form: FormGroup;

  public isHiddingPassword: boolean = true;

  public isShowingLoading: boolean = false;

  public question1 = true;
  public question2 = false;
  public question3 = false;
  public question4 = false;
  public question5 = false;
  public question6 = false;
  public question7 = false;
  public question8 = false;
  public question9 = false;
  public question10 = false;
  public question11 = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar) {

    this.form = formBuilder.group({
      'question-1': '',
      'question-2': '',
      'question-3': '',
      'question-4': '',
      'question-5': '',
      'question-6': '',
      'question-7': '',
      'question-8': '',
      'question-9': '',
      'question-10': '',
      'question-11': '',
    })
  }

  ngOnInit(): void {
  }

  question_1() {
    if (this.form.controls['question-1'].value === '2') {
      this.question1 = false;
      this.question2 = true;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Prueba otra vez', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

    }
  }

  question_2() {
    if (this.form.controls['question-2'].value === '1') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = true;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_3() {
    if (this.form.controls['question-3'].value === '3') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = true;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_4() {
    if (this.form.controls['question-4'].value === '1') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = true;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_5() {
    if (this.form.controls['question-5'].value === '4') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = true;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_6() {
    if (this.form.controls['question-6'].value === '4') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = true;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_7() {
    if (this.form.controls['question-7'].value === '4') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = true;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_8() {
    if (this.form.controls['question-8'].value === '3') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = true;
      this.question10 = false;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_9() {
    if (this.form.controls['question-9'].value === '3') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = true;
      this.question11 = false;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_10() {
    if (this.form.controls['question-10'].value === '2') {
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = true;
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }

  question_11() {
    if (this.form.controls['question-11'].value === '1') {
      this.router.navigate(['reward']);
    } else {

      this.isShowingLoading = false;

      this.matSnackBar.open('Empieza otra vez... ¡Cuñao!', "x", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-snack-bar-container-error']
      });

      this.form.controls['question-1'].setValue(null);
      this.form.controls['question-2'].setValue(null);
      this.form.controls['question-3'].setValue(null);
      this.form.controls['question-4'].setValue(null);
      this.form.controls['question-5'].setValue(null);
      this.form.controls['question-6'].setValue(null);
      this.form.controls['question-7'].setValue(null);
      this.form.controls['question-8'].setValue(null);
      this.form.controls['question-9'].setValue(null);
      this.form.controls['question-10'].setValue(null);
      this.form.controls['question-11'].setValue(null);

      this.question1 = true;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = false;
      this.question7 = false;
      this.question8 = false;
      this.question9 = false;
      this.question10 = false;
      this.question11 = false;
    }
  }
}

