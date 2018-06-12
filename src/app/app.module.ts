import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LessonsComponent } from './teacher/lessons/lessons.component';
import { IndexComponent } from './index/index.component';
<<<<<<< HEAD
import { MindmapComponent } from './teacher/mindmap/mindmap.component';

=======
import { MindmapComponent } from './mindmap/mindmap.component';
import {HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
>>>>>>> 86dad35e7a8d11f4a7239e380ef3948dfac30fdd

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
<<<<<<< HEAD
    HttpModule,
    JsonpModule,
=======
    FormsModule,
      HttpModule,
    HttpClientModule
>>>>>>> 86dad35e7a8d11f4a7239e380ef3948dfac30fdd
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
