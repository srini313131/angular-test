import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { ReverseStringComponent } from './components/reverse-string/reverse-string.component';
import { ArraySortComponent } from './components/array-sort/array-sort.component';
import { TwoNumberSumComponent } from './components/two-number-sum/two-number-sum.component';
import { EmptyAnArrayComponent } from './components/empty-an-array/empty-an-array.component';
import { ArrayLargestSumComponent } from './components/array-largest-sum/array-largest-sum.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', 
  component: AdminComponent,
   canActivate:[AuthGuard],
  children: [
             {path: '', redirectTo:'reverseString', pathMatch:'full'},

              {path: 'reverseString', component: ReverseStringComponent},
              {path: 'sortArray', component: ArraySortComponent},
              {path: 'pairSum', component: TwoNumberSumComponent},
              {path: 'arrayEmpty', component: EmptyAnArrayComponent},
              {path: 'largestSum', component: ArrayLargestSumComponent}
            ]
  },
  {path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
