import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErdosPalEletrajzComponent } from './components/erdos-pal-eletrajz/erdos-pal-eletrajz.component';
import { AProgramCeljaComponent } from './components/a-program-celja/a-program-celja.component';
import { VezetokComponent } from './components/vezetok/vezetok.component';
import { TanarokComponent } from './components/tanarok/tanarok.component';
import { PartnerekComponent } from './components/partnerek/partnerek.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SzabalyzatokComponent } from './components/szabalyzatok/szabalyzatok.component';
import { InformaciokComponent } from './components/informaciok/informaciok.component';
import { JelentkezesFoglalkozasraComponent } from './components/jelentkezes-foglalkozasra/jelentkezes-foglalkozasra.component';
import { FelhivasComponent } from './components/felhivas/felhivas.component';
import { AdomanyozasRendjeComponent } from './components/adomanyozas-rendje/adomanyozas-rendje.component';
import { DijazottakComponent } from './components/dijazottak/dijazottak.component';
import { RolunkIrtakComponent } from './components/rolunk-irtak/rolunk-irtak.component';
import { DijakComponent } from './components/dijak/dijak.component';
import { SwiperModule } from 'swiper/angular';
import { AdminCikkekComponent } from './components/admin-cikkek/admin-cikkek.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { MainComponent } from './components/main/main.component';
import { AdminTanarokComponent } from './components/admin-tanarok/admin-tanarok.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ArticleComponent } from './components/article/article.component';
import { AdminCreateArticleComponent } from './components/admin-create-article/admin-create-article.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { AdminModifyArticleComponent } from './components/admin-modify-article/admin-modify-article.component';
import { AdminNewEventComponent } from './components/admin-new-event/admin-new-event.component';
import { AdminModifyEventComponent } from './components/admin-modify-event/admin-modify-event.component';
import { AdminStudentsComponent } from './components/admin-students/admin-students.component';
import { SelectedGalleryComponent } from './components/selected-gallery/selected-gallery.component';
import { AdminArchiveComponent } from './components/admin-archive/admin-archive.component';
import { AdminGalleryComponent } from './components/admin-gallery/admin-gallery.component';
import { AdminCreateGalleryComponent } from './components/admin-create-gallery/admin-create-gallery.component';
import { AdminModifyGalleryComponent } from './components/admin-modify-gallery/admin-modify-gallery.component';
import { AdminGlobalvarsComponent } from './components/admin-globalvars/admin-globalvars.component';
import { AdminSchoolComponent } from './components/admin-school/admin-school.component';
import { AdminCreateSchoolComponent } from './components/admin-create-school/admin-create-school.component';
import { AdminModifySchoolComponent } from './components/admin-modify-school/admin-modify-school.component';
import { AdminCreateTeacherComponent } from './components/admin-create-teacher/admin-create-teacher.component';
import { AdminModifyTeacherComponent } from './components/admin-modify-teacher/admin-modify-teacher.component';
import { AdminCreateLeaderComponent } from './components/admin-create-leader/admin-create-leader.component';
import { AdminModifyLeaderComponent } from './components/admin-modify-leader/admin-modify-leader.component';
import { AdminLeaderComponent } from './components/admin-leader/admin-leader.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { SafeHtmlPipe } from './safeHtmlPipe.component';
import { JelentkezesComponent } from './components/jelentkezes/jelentkezes.component';
import { AdminAppliedEventsComponent } from './components/admin-applied-events/admin-applied-events.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationCompleteComponent } from './components/registration-complete/registration-complete.component';
import { JoinCompleteComponent } from './components/join-complete/join-complete.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErdosPalEletrajzComponent,
    AProgramCeljaComponent,
    VezetokComponent,
    TanarokComponent,
    PartnerekComponent,
    KapcsolatComponent,
    GaleriaComponent,
    SzabalyzatokComponent,
    InformaciokComponent,
    JelentkezesFoglalkozasraComponent,
    FelhivasComponent,
    AdomanyozasRendjeComponent,
    DijazottakComponent,
    RolunkIrtakComponent,
    DijakComponent,
    AdminCikkekComponent,
    AdminMainComponent,
    MainComponent,
    AdminTanarokComponent,
    LoginComponent,
    RegistrationComponent,
    ArticleComponent,
    AdminCreateArticleComponent,
    AdminEventsComponent,
    AdminModifyArticleComponent,
    AdminNewEventComponent,
    AdminModifyEventComponent,
    AdminStudentsComponent,
    SelectedGalleryComponent,
    AdminArchiveComponent,
    AdminGalleryComponent,
    AdminCreateGalleryComponent,
    AdminModifyGalleryComponent,
    AdminGlobalvarsComponent,
    AdminSchoolComponent,
    AdminCreateSchoolComponent,
    AdminModifySchoolComponent,
    AdminCreateTeacherComponent,
    AdminModifyTeacherComponent,
    AdminCreateLeaderComponent,
    AdminModifyLeaderComponent,
    AdminLeaderComponent,
    AdminUserComponent,
    ModifyUserComponent,
    UploadFilesComponent,
    TextEditorComponent,
    UserProfilComponent,
    SafeHtmlPipe,
    JelentkezesComponent,
    AdminAppliedEventsComponent,
    PageNotFoundComponent,
    RegistrationCompleteComponent,
    JoinCompleteComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    MaterialExampleModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  providers: [
    LoginComponent
  ],
  bootstrap: [AppComponent],
  exports: [SwiperModule]
})
export class AppModule { }
