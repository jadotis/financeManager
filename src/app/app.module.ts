import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './link/link.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkComponent,
    SidebarComponent,
    NavLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
