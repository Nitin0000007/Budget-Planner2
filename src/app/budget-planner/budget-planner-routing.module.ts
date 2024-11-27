import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'side-nav',component:SideNavComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'todo',component:TodoComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent},
  {path: 'Log Out',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
