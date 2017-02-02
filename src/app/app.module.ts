import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';
import { AdComponent } from './adsenseComponent';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';
import { AppState, InternalStateType } from './app.service';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    AppComponent,
    AdComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    SlideMenuModule,
    Ng2HandySyntaxHighlighterModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
