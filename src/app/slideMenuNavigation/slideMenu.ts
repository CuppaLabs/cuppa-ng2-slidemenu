import { Component, OnInit, NgModule, OnChanges, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { ClickOutsideDirective } from './clickOutside';

@Component({
  selector: 'cuppa-slidemenu',
  templateUrl: 'slidemenu.template.html',
  styleUrls: ['slidemenu.styles.css']
})

export class SlideMenu implements AfterViewInit{ 
    
    private datalist: any;
    private menuState: boolean;
    private targetElement: any;

    constructor(private _elementRef : ElementRef, private sanitizer: DomSanitizer) {   
        this.datalist = [
                            {"title":"Electricity","link":"#"},
                            {"title":"Mobile Bill","link":"#"},
                            {"title":"Home and Kitchen","link":"#",
                                "subItems":[
                                            {"title":"Furniture","link":"#"},
                                            {"title":"Cookware","link":"#"},
                                           ]
                            },
                            {"title":"Car and Bike Accessories","link":"#",
                                "subItems":[
                                            {"title":"Tyres and Alloys","link":"#"},
                                            {"title":"Comfort and Safety","link":"#"},
                                           ]
                            },
                        ];
    }

    ngOnInit() {
       this.menuState = false;
    }
    ngAfterViewInit() {
       
    }
    private menuToggle(){
         this.menuState = !this.menuState;      
    }
    private closeMenu(){
         this.menuState = false;      
    }
    private toggleSubMenu(item:any){
        item.expand = !item.expand;
    }

 }
@NgModule({
  imports:      [ CommonModule ],
  declarations: [SlideMenu, ClickOutsideDirective],
  exports:      [SlideMenu, ClickOutsideDirective]
})
export class SlideMenuModule { }