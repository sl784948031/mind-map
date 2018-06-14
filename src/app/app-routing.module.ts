import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {LessonsComponent} from './teacher/lessons/lessons.component';
import {MindmapComponent} from './teacher/mindmap/mindmap.component';
import {CoursesComponent} from './student/courses/courses.component';
import {StudentmapComponent} from './student/studentmap/studentmap.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'mindmap', component: MindmapComponent },
  { path: 'studentmap', component: StudentmapComponent},
<<<<<<< HEAD
  { path: 'thomework', component: ThomeworkComponent},
  { path: 'tresource', component: TresourceComponent},
  { path: 'tcourseware', component: TcoursewareComponent},
  { path: 'shomework', component: ShomeworkComponent},
  { path: 'sresource', component: SresourceComponent},
  { path: 'scourseware', component: ScoursewareComponent},
  { path: 'teacher/:username', component: LessonsComponent },
  { path: 'student/:username', component: CoursesComponent },
=======
>>>>>>> parent of d4c1be5... three new page
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
