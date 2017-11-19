import { Component, OnInit, NgModule, OnChanges, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ClickOutsideDirective } from './clickOutside';

@Component({
    selector: 'cuppa-slidemenu',
    templateUrl: 'slidemenu.template.html',
    styleUrls: ['styles/hamburgers/settings.scss','styles/slidemenu.styles.scss'],
    animations: [
        trigger('toggleMenu', [
            state('show', style({ height: '*' })),
            state('hide', style({ height: 0 })),
            transition('void => *', [
                style({ height: 0, overflow: 'hidden' })
            ]),
            transition('* => hide', [
                style({ height: '*' }),
                animate(250, style({ height: 0 }))
            ]),
            transition('hide => show', [
                style({ height: 0 }),
                animate(250, style({ height: '*' }))
            ])
        ]),
        trigger('toggleArrow', [
            state('right', style({ transform: 'rotate(0)' })),
            state('down', style({ transform: 'rotate(90deg)' })),
            transition('right <=> down', animate('100ms ease-in'))
        ])
    ]
})

export class SlideMenu implements AfterViewInit {

    @Input() menulist: any;

    @Input() config: any;

    @Output('open')
    open: EventEmitter<number> = new EventEmitter<number>();
    @Output('close')
    close: EventEmitter<number> = new EventEmitter<number>();
    @Output('onItemSelect')
    itemSelect: EventEmitter<number> = new EventEmitter<number>();
    menuState: boolean;
    targetElement: any;
    overlayElem: any;
    defaultConfig: any = {
        "animation": "collapse",
        "offset": {
            "top": 55
        },
        closeOnCLick: false
    };
    constructor(private _elementRef: ElementRef, private sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this.menuState = false;
        this.config = Object.assign(this.defaultConfig, this.config);
        this.addOverlayElement();
    }
    ngAfterViewInit() {

    }
    private menuToggle() {
        this.menuState = !this.menuState;
        this.toggleOverlay();
        if (this.menuState) {
            this.open.emit();
        }
        else {
            this.close.emit();
        }
    }
    private closeMenu() {
        this.menuState = false;
        this.overlayElem.style['opacity'] = 0;
    }
    currentItem:any;
    private onItemClick(item: any) {
        if(this.currentItem){
            this.currentItem.active = this.currentItem.active ? false : true;
            
        }
        this.currentItem = item;
        item.active = true;
        if (item.subItems) {
            return false;
        }
        else {
            delete item["expand"];
            var obj = Object.assign(item);
            this.itemSelect.emit(obj);
            if (this.config.closeOnCLick) {
                this.closeMenu();
            }
        }


    }
    private toggleSubMenu(item: any) {
        if (item.expand) {
            item.expand = item.expand == 'hide' ? 'show' : 'hide';
        }
        else {
            item.expand = 'show';
        }

    }
    private addOverlayElement() {
        this.overlayElem = document.createElement('div');
        this.overlayElem.classList.add('cuppa-menu-overlay');
        this.overlayElem.style['position'] = 'fixed';
        this.overlayElem.style['background'] = 'rgba(0, 0, 0, 0.7)';
        this.overlayElem.style['top'] = this.config.offset.top + 'px';
        this.overlayElem.style['left'] = 0;
        this.overlayElem.style['right'] = 0;
        this.overlayElem.style['bottom'] = 0;
        this.overlayElem.style['opacity'] = 0;
        this.overlayElem.style['pointer-events'] = 'none';
        this.overlayElem.style['transition'] = 'all .2s linear';
        document.getElementsByTagName('body')[0].appendChild(this.overlayElem);
    }
    private toggleOverlay() {
        if (this.overlayElem.style['opacity'] == 0) {
            this.overlayElem.style['opacity'] = 1;
        }
        else if (this.overlayElem.style['opacity'] == 1) {
            this.overlayElem.style['opacity'] = 0;
        }
    }
}
@NgModule({
    imports: [CommonModule, BrowserAnimationsModule],
    declarations: [SlideMenu, ClickOutsideDirective],
    exports: [SlideMenu, ClickOutsideDirective, BrowserAnimationsModule]
})
export class SlideMenuModule { }