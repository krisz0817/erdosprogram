import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './authgurads/admin-auth-guard.guard';
import { JoinAuthGuard } from './authgurads/join-auth-guard.guard';
import { LoginAuthGuard } from './authgurads/login-auth.guard';
import { StudentAuthGuard } from './authgurads/student-auth-guard.guard';
import { AProgramCeljaComponent } from './components/a-program-celja/a-program-celja.component';
import { AdminAppliedEventsComponent } from './components/admin-applied-events/admin-applied-events.component';
import { AdminArchiveComponent } from './components/admin-archive/admin-archive.component';
import { AdminCikkekComponent } from './components/admin-cikkek/admin-cikkek.component';
import { AdminCreateArticleComponent } from './components/admin-create-article/admin-create-article.component';
import { AdminCreateGalleryComponent } from './components/admin-create-gallery/admin-create-gallery.component';
import { AdminCreateLeaderComponent } from './components/admin-create-leader/admin-create-leader.component';
import { AdminCreateSchoolComponent } from './components/admin-create-school/admin-create-school.component';
import { AdminCreateTeacherComponent } from './components/admin-create-teacher/admin-create-teacher.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { AdminGalleryComponent } from './components/admin-gallery/admin-gallery.component';
import { AdminGlobalvarsComponent } from './components/admin-globalvars/admin-globalvars.component';
import { AdminLeaderComponent } from './components/admin-leader/admin-leader.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminModifyArticleComponent } from './components/admin-modify-article/admin-modify-article.component';
import { AdminModifyEventComponent } from './components/admin-modify-event/admin-modify-event.component';
import { AdminModifyGalleryComponent } from './components/admin-modify-gallery/admin-modify-gallery.component';
import { AdminModifyLeaderComponent } from './components/admin-modify-leader/admin-modify-leader.component';
import { AdminModifySchoolComponent } from './components/admin-modify-school/admin-modify-school.component';
import { AdminModifyTeacherComponent } from './components/admin-modify-teacher/admin-modify-teacher.component';
import { AdminNewEventComponent } from './components/admin-new-event/admin-new-event.component';
import { AdminSchoolComponent } from './components/admin-school/admin-school.component';
import { AdminTanarokComponent } from './components/admin-tanarok/admin-tanarok.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdomanyozasRendjeComponent } from './components/adomanyozas-rendje/adomanyozas-rendje.component';
import { ArticleComponent } from './components/article/article.component';
import { DijakComponent } from './components/dijak/dijak.component';
import { DijazottakComponent } from './components/dijazottak/dijazottak.component';
import { ErdosPalEletrajzComponent } from './components/erdos-pal-eletrajz/erdos-pal-eletrajz.component';
import { FelhivasComponent } from './components/felhivas/felhivas.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { InformaciokComponent } from './components/informaciok/informaciok.component';
import { JelentkezesFoglalkozasraComponent } from './components/jelentkezes-foglalkozasra/jelentkezes-foglalkozasra.component';
import { JelentkezesComponent } from './components/jelentkezes/jelentkezes.component';
import { JoinCompleteComponent } from './components/join-complete/join-complete.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PartnerekComponent } from './components/partnerek/partnerek.component';
import { RegistrationCompleteComponent } from './components/registration-complete/registration-complete.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RolunkIrtakComponent } from './components/rolunk-irtak/rolunk-irtak.component';
import { SelectedGalleryComponent } from './components/selected-gallery/selected-gallery.component';
import { SzabalyzatokComponent } from './components/szabalyzatok/szabalyzatok.component';
import { TanarokComponent } from './components/tanarok/tanarok.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { VezetokComponent } from './components/vezetok/vezetok.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', component: MainComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'erdos_pal_eletrajz', component: ErdosPalEletrajzComponent},
    {path: 'a_program_celja', component: AProgramCeljaComponent},
    {path: 'vezetok', component: VezetokComponent},
    {path: 'tanarok', component: TanarokComponent},
    {path: 'partnerek', component: PartnerekComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'szabalyzatok', component: SzabalyzatokComponent},
    {path: 'informaciok', component: InformaciokComponent},
    {path: 'jelentkezes/:id', component: JelentkezesComponent, canActivate:[JoinAuthGuard]},
    {path: 'jelentkezes_foglalkozasra', component: JelentkezesFoglalkozasraComponent, canActivate:[StudentAuthGuard]},
    {path: 'felhivas', component: FelhivasComponent},
    {path: 'adomanyozas_rendje', component: AdomanyozasRendjeComponent},
    {path: 'dijazottak', component: DijazottakComponent},
    {path: 'rolunk_irtak', component: RolunkIrtakComponent},
    {path: 'dijak', component: DijakComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: 'galeria/:id', component: SelectedGalleryComponent},
    {path: 'upload-file', component: UploadFilesComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'user-profil', component: UserProfilComponent, canActivate: [LoginAuthGuard]}
  ]},
  {path: 'admin', component: AdminMainComponent, canActivate: [AdminAuthGuard], children:
    [
      {path: 'cikkek', component: AdminCikkekComponent},
      {path: 'tanarok', component: AdminTanarokComponent},
      {path: 'create-article/:id', component: AdminCreateArticleComponent},
      {path: 'create-article', component: AdminCreateArticleComponent},
      {path: 'modify-article/:id', component: AdminModifyArticleComponent},
      {path: 'create-event/:id', component: AdminNewEventComponent},
      {path: 'create-event', component: AdminNewEventComponent},
      {path: 'modify-event/:id', component: AdminModifyEventComponent},
      {path: 'events', component: AdminEventsComponent},
      {path: 'gallery', component: AdminGalleryComponent},
      {path: 'create-gallery', component: AdminCreateGalleryComponent},
      {path: 'create-gallery/:id', component: AdminCreateGalleryComponent},
      {path: 'modify-gallery/:id', component: AdminModifyGalleryComponent},
      {path: 'globalvars', component: AdminGlobalvarsComponent},
      {path: 'leader', component: AdminLeaderComponent},
      {path: 'create-leader', component: AdminCreateLeaderComponent},
      {path: 'create-leader/:id', component: AdminCreateLeaderComponent},
      {path: 'modify-leader/:id', component: AdminModifyLeaderComponent},
      {path: 'archive', component: AdminArchiveComponent},
      {path: 'school', component: AdminSchoolComponent},
      {path: 'create-school', component: AdminCreateSchoolComponent},
      {path: 'modify-school/:id', component: AdminModifySchoolComponent},
      {path: 'create-teacher', component: AdminCreateTeacherComponent},
      {path: 'create-teacher/:id', component: AdminCreateTeacherComponent},
      {path: 'modify-teacher/:id', component: AdminModifyTeacherComponent},
      {path: 'felhasznalok', component: AdminUserComponent},
      {path: 'felhasznalok/:id', component: ModifyUserComponent},
      {path: 'jelentkezettek', component: AdminAppliedEventsComponent}
    ]
  },
  {path: 'registration-complete', component: RegistrationCompleteComponent},
  {path: 'join-complete', component: JoinCompleteComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
