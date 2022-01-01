import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar) { 

    
  }

  ngOnInit(): void {

    this.matSnackBar.open("¡Has completado el reto! Elige tu premio", "x", {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['mat-snack-bar-container-success']
    });
  }

}
