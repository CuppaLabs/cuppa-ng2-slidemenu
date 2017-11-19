/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  state;
  show(){
    this.state = 'active';
  }
  hide(){
    this.state = 'inactive';
  }


  menuConfig: any = {
    "animation": "collapse",
    "offset": {
      "top": 55
    },
    closeOnCLick: false
  };
  menuItemsArray: any[] = [
    { "title": "Electricity", "link": "#" },
    { "title": "Mobile Bill", "link": "#" },
    {
      "title": "Home and Kitchen", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Cookware", "link": "#" },
      ]
    },
    {
      "title": "Car and Bike Accessories", "link": "#",
      "subItems": [
        { "title": "Tyres and Alloys", "link": "#" },
        { "title": "Comfort and Safety", "link": "#" },
      ]
    },
    {
      "title": "Interior Design", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Matress and Flowers", "link": "#" },
      ]
    },
    {
      "title": "Televisions", "link": "#",
      "subItems": [
        { "title": "Samsung", "link": "#" },
        { "title": "LG", "link": "#" },
      ]
    },
    {
      "title": "Computer Accessories", "link": "#",
      "subItems": [
        { "title": "Keyboards", "link": "#" },
        { "title": "Monitors", "link": "#" },
      ]
    },
  ];

  constructor(

  ) { }
  public onMenuClose() {
    console.log("menu closed");
  }
  public onMenuOpen() {
    console.log("menu Opened");
  }
  private onItemSelect(item: any) {
    console.log(item);
  }
  public ngOnInit() {

  }
}
