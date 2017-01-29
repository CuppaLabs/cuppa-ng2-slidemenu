import { Component, OnInit, NgModule, OnChanges, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';

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
                            {"title":"Component","link":"#"},
                            {"title":"Component","link":"#"},
                            {"title":"Component","link":"#",
                                "subItems":[
                                            {"title":"Sub Item","link":"#"},
                                            {"title":"Sub Item","link":"#"},
                                           ]
                            },
                        ];
    }

    ngOnInit() {
       this.menuState = false;
       this.targetElement = document.getElementsByTagName('body')[0];
       
       console.log(this.targetElement);

    }
    ngAfterViewInit() {
       
    }
    private menuToggle(){
         this.menuState = !this.menuState;
         if(this.menuState){
             //this.targetElement.style['transition'] = 'all .3s linear';
             //this.targetElement.style['margin-left'] = '300px';
              //this.targetElement.style['overflow'] = 'hidden';
         }
         else{
             //this.targetElement.style['margin-left'] = '0px'; 
         }
         
    }

 }
@NgModule({
  imports:      [ CommonModule ],
  declarations: [SlideMenu],
  exports:      [SlideMenu]
})
export class SlideMenuModule { }