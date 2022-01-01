import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { RewardComponent } from './reward/reward.component';
import { SecondQuestionComponent } from './second-question/second-question.component';
import { ThirdQuestionComponent } from './third-question/third-question.component';

const routes: Routes = [

  { path: '', component: FirstQuestionComponent },
  { path: 'second-question', component: SecondQuestionComponent },
  { path: 'third-question', component: ThirdQuestionComponent },
  { path: 'reward', component: RewardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
