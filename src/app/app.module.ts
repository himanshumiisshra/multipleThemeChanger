import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PortalHeaderComponent } from './UI-Components/portal-header/portal-header.component'
import {MatSidenavModule} from "@angular/material/sidenav"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import { DeCardViewComponent } from './UI-Components/de-card-view/de-card-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MenuComponent } from './UI-Components/portal-header/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { StyleManagerService } from './shared-service/style-manager.service';
import { NavigationPortalComponent } from './UI-Components/navigation-portal/navigation-portal.component';
import { DeListHeaderSubHeaderComponent } from './UI-Components/de-list-header-sub-header/de-list-header-sub-header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SelectionsComponent } from './UI-Components/selections/selections.component';
import { StoreModule } from '@ngrx/store';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AssignmentComponent } from './module/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalHeaderComponent,
    DeCardViewComponent,
    MenuComponent,
    NavigationPortalComponent,
    DeListHeaderSubHeaderComponent,
    SelectionsComponent,
    AssignmentComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDialogModule,
    StoreModule.forRoot({}, {}),
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule
    
  ],
  providers: [StyleManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
