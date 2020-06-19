import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {ApplyForServiceComponent} from './reusable-components/apply-for-service/apply-for-service.component';
import {ServiceListPageComponent} from './service-list-page/service-list-page.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
import {HeaderComponent} from './master/header/header.component';
import {FooterComponent} from './master/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailPageComponent,
    ApplyForServiceComponent,
    ServiceListPageComponent,
    GalleryPageComponent,
    ContactsPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: MainPageComponent
      },
      {
        path: 'detail', component: DetailPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
