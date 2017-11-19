webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iphone-img {\r\n    position: relative;\r\n    width: 350px;\r\n    margin: 30px auto;\r\n}\r\n.iphone-img > video {\r\n    position: absolute;\r\n    left: 52px;\r\n    top: 65px;\r\n    width: 235px;\r\n    border: 2px solid #ccc;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-md top-navbar d-print-none navbar-default\">\r\n    <div class=\"container\">\r\n      <cuppa-slidemenu [menulist]=\"menuItemsArray\" [config]=\"menuConfig\" (open)=\"onMenuOpen()\" (close)=\"onMenuClose()\" (onItemSelect)=\"onItemSelect($event)\"></cuppa-slidemenu>\r\n      <a class=\"navbar-brand\" href=\"/\">\r\n      \r\n          <img src=\"https://cuppalabs.github.io/img/cuppa-logo-coffee11.png\" height=\"32\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"fa fa-navicon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n\r\n        <ul class=\"navbar-nav flex-row\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-item nav-link disabled\" href=\"#\">\r\n                Slide in Menu Examples\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-item nav-link\" href=\"https://cuppalabs.github.io/components/slidemenu/\">\r\n                Documentation\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-item nav-link\" href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu\">\r\n               Github\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-item nav-link\" href=\"http://cuppalabs.github.io/aboutme\">About Me</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"jumbotron\">\r\n          <h1 class=\"display-3\" style=\"text-align:center\">Angular 2 Slide in Menu</h1>\r\n          <h2 class=\"lead\" style=\"text-align:center\">Demo and Example</h2>\r\n          <p style=\"text-align:center;width: 100%;max-width: 100%;\">Click on the hamburger icon on the top left corner</p>\r\n          <div class=\"iphone-img\">\r\n        <img src=\"assets/img/iphone-empty.png\" style=\"width: 100%;\">\r\n        <video autoplay=\"\" loop=\"\" src=\"assets/img/demo4.webm\" type=\"video/webm\"></video>\r\n        </div>\r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Angular 2 decorators and services
 */

/*
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.menuConfig = {
            "animation": "collapse",
            "offset": {
                "top": 55
            },
            closeOnCLick: false
        };
        this.menuItemsArray = [
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
    }
    AppComponent.prototype.show = function () {
        this.state = 'active';
    };
    AppComponent.prototype.hide = function () {
        this.state = 'inactive';
    };
    AppComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    AppComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    AppComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/cuppa-ng2-slidemenu/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cuppa_ng2_slidemenu_slideMenu__ = __webpack_require__("../../../../../src/app/cuppa-ng2-slidemenu/slideMenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cuppa_ng2_slidemenu_slideMenu__["a" /* SlideMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/cuppa-ng2-slidemenu/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cuppa-ng2-slidemenu/clickOutside.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/cuppa-ng2-slidemenu/src/clickOutside.js.map

/***/ }),

/***/ "../../../../../src/app/cuppa-ng2-slidemenu/slideMenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SlideMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clickOutside__ = __webpack_require__("../../../../../src/app/cuppa-ng2-slidemenu/clickOutside.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SlideMenu = /** @class */ (function () {
    function SlideMenu(_elementRef, sanitizer) {
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.itemSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.defaultConfig = {
            "animation": "collapse",
            "offset": {
                "top": 55
            },
            closeOnCLick: false
        };
    }
    SlideMenu.prototype.ngOnInit = function () {
        this.menuState = false;
        this.config = Object.assign(this.defaultConfig, this.config);
        this.addOverlayElement();
    };
    SlideMenu.prototype.ngAfterViewInit = function () {
    };
    SlideMenu.prototype.menuToggle = function () {
        this.menuState = !this.menuState;
        this.toggleOverlay();
        if (this.menuState) {
            this.open.emit();
        }
        else {
            this.close.emit();
        }
    };
    SlideMenu.prototype.closeMenu = function () {
        this.menuState = false;
        this.overlayElem.style['opacity'] = 0;
    };
    SlideMenu.prototype.onItemClick = function (item) {
        if (this.currentItem) {
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
    };
    SlideMenu.prototype.toggleSubMenu = function (item) {
        if (item.expand) {
            item.expand = item.expand == 'hide' ? 'show' : 'hide';
        }
        else {
            item.expand = 'show';
        }
    };
    SlideMenu.prototype.addOverlayElement = function () {
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
    };
    SlideMenu.prototype.toggleOverlay = function () {
        if (this.overlayElem.style['opacity'] == 0) {
            this.overlayElem.style['opacity'] = 1;
        }
        else if (this.overlayElem.style['opacity'] == 1) {
            this.overlayElem.style['opacity'] = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "menulist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('open'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], SlideMenu.prototype, "open", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('close'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
    ], SlideMenu.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('onItemSelect'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _c || Object)
    ], SlideMenu.prototype, "itemSelect", void 0);
    SlideMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cuppa-slidemenu',
            template: __webpack_require__("../../../../../src/app/cuppa-ng2-slidemenu/slidemenu.template.html"),
            styles: [__webpack_require__("../../../../../src/app/cuppa-ng2-slidemenu/styles/hamburgers/settings.scss"), __webpack_require__("../../../../../src/app/cuppa-ng2-slidemenu/styles/slidemenu.styles.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('toggleMenu', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: 0, overflow: 'hidden' })
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('* => hide', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: '*' }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: 0 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('hide => show', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ height: '*' }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('toggleArrow', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ transform: 'rotate(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ transform: 'rotate(90deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('right <=> down', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('100ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object])
    ], SlideMenu);
    return SlideMenu;
    var _a, _b, _c, _d, _e;
}());

var SlideMenuModule = /** @class */ (function () {
    function SlideMenuModule() {
    }
    SlideMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
            declarations: [SlideMenu, __WEBPACK_IMPORTED_MODULE_5__clickOutside__["a" /* ClickOutsideDirective */]],
            exports: [SlideMenu, __WEBPACK_IMPORTED_MODULE_5__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]]
        })
    ], SlideMenuModule);
    return SlideMenuModule;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/cuppa-ng2-slidemenu/src/slideMenu.js.map

/***/ }),

/***/ "../../../../../src/app/cuppa-ng2-slidemenu/slidemenu.template.html":
/***/ (function(module, exports) {

module.exports = "<span (clickOutside)=\"closeMenu()\">\r\n    <button (click)=\"menuToggle()\" class=\"hamburger hamburger--{{config.animation}}\" [ngClass]=\"{'is-active': menuState, '': !menuState}\">\r\n  <span class=\"hamburger-box\">\r\n    <span class=\"hamburger-inner\"></span>\r\n</span>\r\n</button>\r\n<div class=\"menu-container cuppa-menu\" [ngClass]=\"{'show-menu': menuState, 'hide-menu': !menuState}\" [ngStyle]=\"{'top':config.offset.top+'px'}\">\r\n    <ul>\r\n        <li *ngFor=\"let item of menulist\">\r\n            <a *ngIf=\"item.subItems\" (click)=\"toggleSubMenu(item)\">{{item.title}} \r\n                <i *ngIf=\"item.subItems\" class=\"fa fa-angle-right\" [@toggleArrow]=\"item.expand == 'show' ? 'down': 'right'\"></i>\r\n            </a>\r\n            <a *ngIf=\"!item.subItems\" [ngClass]=\"{'active': item.active}\" (click)=\"onItemClick(item)\">{{item.title}} </a>\r\n            <ul *ngIf=\"item.subItems\" class=\"sub-menu\" [@toggleMenu]=\"item.expand == undefined ? 'hide': item.expand\">\r\n\r\n                <li *ngFor=\"let subitem of item.subItems\"><a (click)=\"onItemClick(subitem)\" [ngClass]=\"{'active': subitem.active}\">{{subitem.title}}</a></li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<span>\r\n<!--<div class=\"cuppa-menu-overlay\" [ngClass]=\"{'show-overlay': menuState, 'hide-overlay': !menuState}\"></div> -->"

/***/ }),

/***/ "../../../../../src/app/cuppa-ng2-slidemenu/styles/hamburgers/settings.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Hamburgers\r\n * @description Tasty CSS-animated hamburgers\r\n * @author Jonathan Suh @jonsuh\r\n * @site https://jonsuh.com/hamburgers\r\n * @link https://github.com/jonsuh/hamburgers\r\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.7; }\n  .hamburger:focus {\n    outline: none; }\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 40px;\n    height: 4px;\n    background-color: #333;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -10px; }\n  .hamburger-inner::after {\n    bottom: -10px; }\n\n/*\n   * 3DX\n   */\n.hamburger--3dx .hamburger-box {\n  -webkit-perspective: 80px;\n          perspective: 80px; }\n\n.hamburger--3dx .hamburger-inner {\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n  .hamburger--3dx.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dx.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n            transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DX Reverse\n   */\n.hamburger--3dx-r .hamburger-box {\n  -webkit-perspective: 80px;\n          perspective: 80px; }\n\n.hamburger--3dx-r .hamburger-inner {\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg); }\n  .hamburger--3dx-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dx-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n            transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY\n   */\n.hamburger--3dy .hamburger-box {\n  -webkit-perspective: 80px;\n          perspective: 80px; }\n\n.hamburger--3dy .hamburger-inner {\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n  .hamburger--3dy.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dy.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n            transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY Reverse\n   */\n.hamburger--3dy-r .hamburger-box {\n  -webkit-perspective: 80px;\n          perspective: 80px; }\n\n.hamburger--3dy-r .hamburger-inner {\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n  .hamburger--3dy-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dy-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n            transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY\n   */\n.hamburger--3dxy .hamburger-box {\n  -webkit-perspective: 80px;\n          perspective: 80px; }\n\n.hamburger--3dxy .hamburger-inner {\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(180deg) rotateY(180deg);\n          transform: rotateX(180deg) rotateY(180deg); }\n  .hamburger--3dxy.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dxy.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n            transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY Reverse\n   */\n.hamburger--3dxy-r .hamburger-box {\n  -webkit-perspective: 80px;\n          perspective: 80px; }\n\n.hamburger--3dxy-r .hamburger-inner {\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);\n          transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }\n  .hamburger--3dxy-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dxy-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n            transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * Arrow\n   */\n.hamburger--arrow.is-active .hamburger-inner::before {\n  -webkit-transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  -webkit-transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Right\n   */\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  -webkit-transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  -webkit-transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Alt\n   */\n.hamburger--arrowalt .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::before {\n  top: 0;\n  -webkit-transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::after {\n  bottom: 0;\n  -webkit-transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Alt Right\n   */\n.hamburger--arrowalt-r .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::before {\n  top: 0;\n  -webkit-transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  -webkit-transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n * Arrow Turn\n */\n.hamburger--arrowturn.is-active .hamburger-inner {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg); }\n  .hamburger--arrowturn.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n            transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n  .hamburger--arrowturn.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n            transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n * Arrow Turn Right\n */\n.hamburger--arrowturn-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg); }\n  .hamburger--arrowturn-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n            transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n  .hamburger--arrowturn-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n            transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Boring\n   */\n.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n  transition-property: none; }\n\n.hamburger--boring.is-active .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  .hamburger--boring.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--boring.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n\n/*\n   * Collapse\n   */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--collapse .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n  .hamburger--collapse .hamburger-inner::before {\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n          transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--collapse.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n  .hamburger--collapse.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Collapse Reverse\n   */\n.hamburger--collapse-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--collapse-r .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n  .hamburger--collapse-r .hamburger-inner::before {\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, -10px, 0) rotate(45deg);\n          transform: translate3d(0, -10px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--collapse-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n  .hamburger--collapse-r.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Elastic\n   */\n.hamburger--elastic .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  .hamburger--elastic .hamburger-inner::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease; }\n  .hamburger--elastic .hamburger-inner::after {\n    top: 20px;\n    transition: -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 10px, 0) rotate(135deg);\n          transform: translate3d(0, 10px, 0) rotate(135deg);\n  transition-delay: 0.075s; }\n  .hamburger--elastic.is-active .hamburger-inner::before {\n    transition-delay: 0s;\n    opacity: 0; }\n  .hamburger--elastic.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -20px, 0) rotate(-270deg);\n            transform: translate3d(0, -20px, 0) rotate(-270deg);\n    transition-delay: 0.075s; }\n\n/*\n   * Elastic Reverse\n   */\n.hamburger--elastic-r .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  .hamburger--elastic-r .hamburger-inner::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease; }\n  .hamburger--elastic-r .hamburger-inner::after {\n    top: 20px;\n    transition: -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 10px, 0) rotate(-135deg);\n          transform: translate3d(0, 10px, 0) rotate(-135deg);\n  transition-delay: 0.075s; }\n  .hamburger--elastic-r.is-active .hamburger-inner::before {\n    transition-delay: 0s;\n    opacity: 0; }\n  .hamburger--elastic-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -20px, 0) rotate(270deg);\n            transform: translate3d(0, -20px, 0) rotate(270deg);\n    transition-delay: 0.075s; }\n\n/*\n   * Emphatic\n   */\n.hamburger--emphatic {\n  overflow: hidden; }\n  .hamburger--emphatic .hamburger-inner {\n    transition: background-color 0.125s 0.175s ease-in; }\n    .hamburger--emphatic .hamburger-inner::before {\n      left: 0;\n      transition: top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n    .hamburger--emphatic .hamburger-inner::after {\n      top: 10px;\n      right: 0;\n      transition: top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n  .hamburger--emphatic.is-active .hamburger-inner {\n    transition-delay: 0s;\n    transition-timing-function: ease-out;\n    background-color: transparent; }\n    .hamburger--emphatic.is-active .hamburger-inner::before {\n      left: -80px;\n      top: -80px;\n      -webkit-transform: translate3d(80px, 80px, 0) rotate(45deg);\n              transform: translate3d(80px, 80px, 0) rotate(45deg);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n    .hamburger--emphatic.is-active .hamburger-inner::after {\n      right: -80px;\n      top: -80px;\n      -webkit-transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n              transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Emphatic Reverse\n   */\n.hamburger--emphatic-r {\n  overflow: hidden; }\n  .hamburger--emphatic-r .hamburger-inner {\n    transition: background-color 0.125s 0.175s ease-in; }\n    .hamburger--emphatic-r .hamburger-inner::before {\n      left: 0;\n      transition: top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n    .hamburger--emphatic-r .hamburger-inner::after {\n      top: 10px;\n      right: 0;\n      transition: top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n  .hamburger--emphatic-r.is-active .hamburger-inner {\n    transition-delay: 0s;\n    transition-timing-function: ease-out;\n    background-color: transparent; }\n    .hamburger--emphatic-r.is-active .hamburger-inner::before {\n      left: -80px;\n      top: 80px;\n      -webkit-transform: translate3d(80px, -80px, 0) rotate(-45deg);\n              transform: translate3d(80px, -80px, 0) rotate(-45deg);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n    .hamburger--emphatic-r.is-active .hamburger-inner::after {\n      right: -80px;\n      top: 80px;\n      -webkit-transform: translate3d(-80px, -80px, 0) rotate(45deg);\n              transform: translate3d(-80px, -80px, 0) rotate(45deg);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Minus\n   */\n.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before {\n  top: 0; }\n\n.hamburger--minus.is-active .hamburger-inner::after {\n  bottom: 0; }\n\n/*\n   * Slider\n   */\n.hamburger--slider .hamburger-inner {\n  top: 2px; }\n  .hamburger--slider .hamburger-inner::before {\n    top: 10px;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider .hamburger-inner::after {\n    top: 20px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n          transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--slider.is-active .hamburger-inner::before {\n    -webkit-transform: rotate(-45deg) translate3d(-5.71428571px, -6px, 0);\n            transform: rotate(-45deg) translate3d(-5.71428571px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -20px, 0) rotate(-90deg);\n            transform: translate3d(0, -20px, 0) rotate(-90deg); }\n\n/*\n   * Slider Reverse\n   */\n.hamburger--slider-r .hamburger-inner {\n  top: 2px; }\n  .hamburger--slider-r .hamburger-inner::before {\n    top: 10px;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider-r .hamburger-inner::after {\n    top: 20px; }\n\n.hamburger--slider-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 10px, 0) rotate(-45deg);\n          transform: translate3d(0, 10px, 0) rotate(-45deg); }\n  .hamburger--slider-r.is-active .hamburger-inner::before {\n    -webkit-transform: rotate(45deg) translate3d(5.71428571px, -6px, 0);\n            transform: rotate(45deg) translate3d(5.71428571px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -20px, 0) rotate(90deg);\n            transform: translate3d(0, -20px, 0) rotate(90deg); }\n\n/*\n   * Spin\n   */\n.hamburger--spin .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spin .hamburger-inner::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n  .hamburger--spin .hamburger-inner::after {\n    transition: bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin.is-active .hamburger-inner {\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spin.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n  .hamburger--spin.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spin Reverse\n   */\n.hamburger--spin-r .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spin-r .hamburger-inner::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n  .hamburger--spin-r .hamburger-inner::after {\n    transition: bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-225deg);\n          transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spin-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n  .hamburger--spin-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    transition: bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spring\n   */\n.hamburger--spring .hamburger-inner {\n  top: 2px;\n  transition: background-color 0s 0.13s linear; }\n  .hamburger--spring .hamburger-inner::before {\n    top: 10px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spring .hamburger-inner::after {\n    top: 20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring.is-active .hamburger-inner {\n  transition-delay: 0.22s;\n  background-color: transparent; }\n  .hamburger--spring.is-active .hamburger-inner::before {\n    top: 0;\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n            transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--spring.is-active .hamburger-inner::after {\n    top: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 10px, 0) rotate(-45deg);\n            transform: translate3d(0, 10px, 0) rotate(-45deg); }\n\n/*\n   * Spring Reverse\n   */\n.hamburger--spring-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spring-r .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }\n  .hamburger--spring-r .hamburger-inner::before {\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);\n          transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spring-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }\n  .hamburger--spring-r.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand\n   */\n.hamburger--stand .hamburger-inner {\n  transition: background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand .hamburger-inner::before {\n    transition: top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand .hamburger-inner::after {\n    transition: bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand.is-active .hamburger-inner {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  background-color: transparent;\n  transition: background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    transition: top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    transition: bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand Reverse\n   */\n.hamburger--stand-r .hamburger-inner {\n  transition: background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand-r .hamburger-inner::before {\n    transition: top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand-r .hamburger-inner::after {\n    transition: bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  background-color: transparent;\n  transition: background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand-r.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    transition: top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    transition: bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Squeeze\n   */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--squeeze .hamburger-inner::before {\n    transition: top 0.075s 0.12s ease, opacity 0.075s ease; }\n  .hamburger--squeeze .hamburger-inner::after {\n    transition: bottom 0.075s 0.12s ease, -webkit-transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.is-active .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.075s ease, opacity 0.075s 0.12s ease; }\n  .hamburger--squeeze.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    transition: bottom 0.075s ease, -webkit-transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Vortex\n   */\n.hamburger--vortex .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n    transition-duration: 0s;\n    transition-delay: 0.1s;\n    transition-timing-function: linear; }\n  .hamburger--vortex .hamburger-inner::before {\n    transition-property: top, opacity; }\n  .hamburger--vortex .hamburger-inner::after {\n    transition-property: bottom, -webkit-transform;\n    transition-property: bottom, transform;\n    transition-property: bottom, transform, -webkit-transform; }\n\n.hamburger--vortex.is-active .hamburger-inner {\n  -webkit-transform: rotate(765deg);\n          transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n    transition-delay: 0s; }\n  .hamburger--vortex.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--vortex.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n/*\n   * Vortex Reverse\n   */\n.hamburger--vortex-r .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n    transition-duration: 0s;\n    transition-delay: 0.1s;\n    transition-timing-function: linear; }\n  .hamburger--vortex-r .hamburger-inner::before {\n    transition-property: top, opacity; }\n  .hamburger--vortex-r .hamburger-inner::after {\n    transition-property: bottom, -webkit-transform;\n    transition-property: bottom, transform;\n    transition-property: bottom, transform, -webkit-transform; }\n\n.hamburger--vortex-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-765deg);\n          transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n    transition-delay: 0s; }\n  .hamburger--vortex-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--vortex-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cuppa-ng2-slidemenu/styles/slidemenu.styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-container {\n  width: 250px;\n  height: 100%;\n  position: fixed;\n  background: #fff;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n  font-family: 'Arial',sans-serif;\n  overflow: auto;\n  height: calc(100% - 60px);\n  z-index: 9999999;\n  box-shadow: 0px 5px 2px #ccc; }\n\n.menu-container .show-menu {\n  left: 0; }\n\n.menu-container.hide-menu {\n  left: -250px; }\n\n.menu-open {\n  margin-left: 250px !important; }\n\n.cuppa-menu ul {\n  list-style: none;\n  padding: 0px; }\n\n.cuppa-menu ul > li {\n  cursor: pointer; }\n\n.sub-menu {\n  overflow: hidden; }\n\n.sub-menu > li > a {\n  padding-left: 50px !important; }\n\n.cuppa-menu ul > li > a {\n  display: block;\n  padding: 15px 30px;\n  background: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #ccc;\n  transition: all .3s linear; }\n\n.cuppa-menu ul > li > a:hover {\n  background: #007bff !important;\n  color: #fff; }\n\n.cuppa-menu ul > li > a.active {\n  background: #007bff !important;\n  color: #fff; }\n\n.cuppa-menu ul > li > a > i {\n  font-size: 24px;\n  float: right;\n  margin-top: -2px;\n  pointer-events: none; }\n\n.cuppa-menu-overlay {\n  position: fixed;\n  background: #000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  transition: all 1s linear; }\n\n.show-overlay {\n  display: block; }\n\n.hide-overlay {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/cuppa-ng2-slidemenu/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/cuppa-ng2-slidemenu/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map