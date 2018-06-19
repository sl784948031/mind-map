import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {LessonsComponent} from './teacher/lessons/lessons.component';
import {MindmapComponent} from './teacher/mindmap/mindmap.component';
import {CoursesComponent} from './student/courses/courses.component';
import {StudentmapComponent} from './student/studentmap/studentmap.component';
<<<<<<< HEAD
import {ResourcesComponent} from './resources/resources.component';
=======
import {ShomeworkComponent} from './student/shomework/shomework.component';
import {SresourceComponent} from './student/sresource/sresource.component';
import {ScoursewareComponent} from './student/scourseware/scourseware.component';
import {ThomeworkComponent} from './teacher/thomework/thomework.component';
import {TresourceComponent} from './teacher/tresource/tresource.component';
import {TcoursewareComponent} from './teacher/tcourseware/tcourseware.component';
>>>>>>> 53f5d8156b4085f8855e43ec9fc1c39d492a83c1

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  // { path: 'lessons', component: LessonsComponent },
  { path: 'mindmap', component: MindmapComponent },
  // { path: 'courses', component: CoursesComponent},
  { path: 'studentmap', component: StudentmapComponent},
  { path: 'teacher/:username', component: LessonsComponent },
  { path: 'student/:username', component: CoursesComponent },
  { path: 'shomework', component: ShomeworkComponent},
  { path: 'sresource', component: SresourceComponent},
  { path: 'scourseware', component: ScoursewareComponent},
  { path: 'thomework', component: ThomeworkComponent},
  { path: 'tresource', component: TresourceComponent},
  { path: 'tcourseware', component: TcoursewareComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path : 'resources' , component: ResourcesComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
