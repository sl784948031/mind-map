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
import {HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LessonsComponent,
    IndexComponent,
    MindmapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
      HttpModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
