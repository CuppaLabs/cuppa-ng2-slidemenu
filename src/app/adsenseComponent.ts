// ad component
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ad',
  template: `
  <div class="demo-card-wide mdl-card mdl-shadow--2dp ad-card">
  <div class="mdl-card__supporting-text">
    <ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-4525567075133342" data-ad-slot="4252585105"></ins>
  </div>
</div>
  `,
})
export class AdComponent implements AfterViewInit {

  ngAfterViewInit() {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }
}