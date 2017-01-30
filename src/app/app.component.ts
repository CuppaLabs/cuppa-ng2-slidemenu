/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
         <cuppa-slidemenu></cuppa-slidemenu>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="https://cuppalabs.github.io/angular2-social-login/">
          <img alt="Brand" src="assets/img/cuppa-logo.png">
          Cuppa Labs</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="documentation.html">Getting Started<span class="sr-only">(current)</span></a></li>
              <li><a href="#architecture">Installation</a></li>
              <li><a href="#flowchart">Usage</a></li>
              <li><a href="#technologies">Configuration</a></li>
              <li><a href="https://github.com/CuppaLabs/angular2-social-login">Github</a></li>

            </ul>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    <div class="jumbotron col-md-12">
      <div class="col-md-6">
        <img style="width:18%;" src="assets/img/angular-logo.png">
        <h1 class="component-title">Cuppa Slide Menu</h1>
        <h2>Angular 2 slide out navigation menu for web and mobile</h2>
        <h4>Click on hamburger menu on top left  corner</h4>

        <p class="bt-group">
            <a href="https://cuppa-angular2-oauth.herokuapp.com/login" target="_blank" type="button" class="btn btn-danger btn-lg"><i class="fa fa-github" aria-hidden="true"></i><span class="hidden-xs">Github</span></a>
            <a href="https://github.com/CuppaLabs/angular2-social-login/archive/master.zip" type="button" class="btn btn-danger btn-lg"><i class="fa fa-download" aria-hidden="true"></i><span class="hidden-xs"> Download </span></a>
        </p>
      </div>
      <div class="col-md-6">
        <div class="iphone-img">
        <img style="width: 71%;" src="assets/img/iphone-empty.png">
        <video type="video/webm" loop="" autoplay="" src="assets/img/demo4.webm"></video>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {


  constructor(
    
  ) {}

  public ngOnInit() {
    
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
