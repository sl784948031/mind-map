import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {LessonsComponent} from './teacher/lessons/lessons.component';
import {MindmapComponent} from './teacher/mindmap/mindmap.component';
import {CoursesComponent} from './student/courses/courses.component';
import {StudentmapComponent} from './student/studentmap/studentmap.component';
import {ResourcesComponent} from './resources/resources.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'mindmap', component: MindmapComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'studentmap', component: StudentmapComponent},
  { path: 'teacher/:username', component: LessonsComponent },
  { path: 'student/:username', component: CoursesComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path : 'resources' , component: ResourcesComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
