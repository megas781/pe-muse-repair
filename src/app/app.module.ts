import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ServiceDetailPageComponent} from './service-detail-page/service-detail-page.component';
import {ApplyForServiceComponent} from './reusable-components/apply-for-service/apply-for-service.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
import {HeaderComponent} from './master/header/header.component';
import {FooterComponent} from './master/footer/footer.component';
import {ModalOrderRepairComponent} from './modal-order-repair/modal-order-repair.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';
import { EditModalComponent } from './order-list-page/edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ApplyForServiceComponent,
    GalleryPageComponent,
    ContactsPageComponent,
    HeaderComponent,
    FooterComponent,
    ServiceDetailPageComponent,
    ModalOrderRepairComponent,
    OrderListPageComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'service/:category', component: ServiceDetailPageComponent},
      {path: 'gallery', component: GalleryPageComponent},
      {path: 'order-list', component: OrderListPageComponent},
      {path: 'contacts', component: ContactsPageComponent}
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
