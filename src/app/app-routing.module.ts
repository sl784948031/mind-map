import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {LessonsComponent} from './lessons/lessons.component';
import {MindmapComponent} from './mindmap/mindmap.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'mindmap', component: MindmapComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
