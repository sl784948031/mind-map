import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LessonsComponent } from './teacher/lessons/lessons.component';
import { IndexComponent } from './index/index.component';
import { MindmapComponent } from './teacher/mindmap/mindmap.component';
import { CoursesComponent } from './student/courses/courses.component';

import {HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { StudentmapComponent } from './student/studentmap/studentmap.component';
import { ThomeworkComponent } from './teacher/thomework/thomework.component';
import { TresourceComponent } from './teacher/tresource/tresource.component';
import { TcoursewareComponent } from './teacher/tcourseware/tcourseware.component';
import { ShomeworkComponent } from './student/shomework/shomework.component';
import { SresourceComponent } from './student/sresource/sresource.component';
import { ScoursewareComponent } from './student/scourseware/scourseware.component';
import {ResourcesComponent} from './resources/resources.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
      ResourcesComponent,
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LessonsComponent,
    IndexComponent,
    MindmapComponent,
    CoursesComponent,
    StudentmapComponent,
    ThomeworkComponent,
    TresourceComponent,
    TcoursewareComponent,
    ShomeworkComponent,
    SresourceComponent,
    ScoursewareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
      HttpModule,
    HttpClientModule,
      FileUploadModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
