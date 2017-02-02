webpackJsonpac__name_([1],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_app_slideMenuNavigation_slideMenu__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_app_slideMenuNavigation_slideMenu__["a"]; });



/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });

var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    return ClickOutsideDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ClickOutsideDirective.prototype, "clickOutside", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
    __metadata("design:returntype", void 0)
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[clickOutside]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ClickOutsideDirective);



/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clickOutside__ = __webpack_require__(44);
/* unused harmony export SlideMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuModule; });




var SlideMenu = (function () {
    function SlideMenu(_elementRef, sanitizer) {
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addOverlayElement();
    }
    SlideMenu.prototype.ngOnInit = function () {
        this.menuState = false;
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
        this.itemSelect.emit(item);
    };
    SlideMenu.prototype.toggleSubMenu = function (item) {
        item.expand = !item.expand;
    };
    SlideMenu.prototype.addOverlayElement = function () {
        this.overlayElem = document.createElement('div');
        this.overlayElem.classList.add('cuppa-menu-overlay');
        this.overlayElem.style['position'] = 'fixed';
        this.overlayElem.style['background'] = 'rgba(0, 0, 0, 0.7)';
        this.overlayElem.style['top'] = 0;
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
    return SlideMenu;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SlideMenu.prototype, "menulist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('open'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SlideMenu.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('close'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SlideMenu.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onItemSelect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SlideMenu.prototype, "itemSelect", void 0);
SlideMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cuppa-slidemenu',
        template: __webpack_require__(54),
        styles: [__webpack_require__(56)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
], SlideMenu);

var SlideMenuModule = (function () {
    function SlideMenuModule() {
    }
    return SlideMenuModule;
}());
SlideMenuModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        declarations: [SlideMenu, __WEBPACK_IMPORTED_MODULE_3__clickOutside__["a" /* ClickOutsideDirective */]],
        exports: [SlideMenu, __WEBPACK_IMPORTED_MODULE_3__clickOutside__["a" /* ClickOutsideDirective */]]
    })
], SlideMenuModule);



/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".menu-container {\n  width: 250px;\n  height: 100%;\n  position: fixed;\n  background: #fff;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n  border-right: 1px solid #ccc;\n  font-family: 'Arial',sans-serif;\n  overflow: auto;\n  height: calc(100% - 60px);\n  z-index: 9999999;\n  box-shadow: 0px 5px 2px #ccc; }\n\n.menu-container .show-menu {\n  left: 0; }\n\n.menu-container.hide-menu {\n  left: -250px; }\n\n.menu-open {\n  margin-left: 250px !important; }\n\n.cuppa-menu ul {\n  list-style: none;\n  padding: 0px; }\n\n.sub-menu > li > a {\n  padding-left: 50px !important; }\n\n.cuppa-menu ul > li > a {\n  display: block;\n  padding: 15px 30px;\n  background: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #ccc; }\n\n.cuppa-menu ul > li > a:hover {\n  background: #3fd48f !important;\n  color: #fff; }\n\n.cuppa-menu ul > li > a > i {\n  font-size: 24px;\n  float: right;\n  margin-top: -2px;\n  pointer-events: none; }\n\n/*!\r\n * Hamburgers\r\n * @description Tasty CSS-animated hamburgers\r\n * @author Jonathan Suh @jonsuh\r\n * @site https://jonsuh.com/hamburgers\r\n * @link https://github.com/jonsuh/hamburgers\r\n */\n/*.hamburger {\r\n  float: left;\r\n  padding: 15px 15px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition-property: opacity, filter;\r\n  transition-duration: 0.15s;\r\n  transition-timing-function: linear;\r\n  font: inherit;\r\n  color: inherit;\r\n  text-transform: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n  margin: 0;\r\n  height: 26px;\r\n  overflow: visible; }\r\n  .hamburger:hover {\r\n    opacity: 0.7; }\r\n\r\n.hamburger-box {\r\n  width: 40px;\r\n  height: 24px;\r\n  display: inline-block;\r\n  position: relative; }\r\n.hamburger:focus{\r\n    outline: none;\r\n}\r\n.hamburger-inner {\r\n  display: block;\r\n  top: 50%;\r\n  margin-top: -2px; }\r\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\r\n    width: 40px;\r\n    height: 2px;\r\n    background-color: #000;\r\n    border-radius: 4px;\r\n    position: absolute;\r\n    transition-property: transform;\r\n    transition-duration: 0.15s;\r\n    transition-timing-function: ease; }\r\n  .hamburger-inner::before, .hamburger-inner::after {\r\n    content: \"\";\r\n    display: block; }\r\n  .hamburger-inner::before {\r\n    top: -10px; }\r\n  .hamburger-inner::after {\r\n    bottom: -10px; }\r\n\r\n.hamburger--arrow.is-active .hamburger-inner::before {\r\n  transform: translate3d(-9px, 0, 0) rotate(-45deg) scale(0.7, 1); }\r\n\r\n.hamburger--arrow.is-active .hamburger-inner::after {\r\n  transform: translate3d(-9px, 0, 0) rotate(45deg) scale(0.7, 1); }\r\n\r\n.hamburger--arrow-r.is-active .hamburger-inner::before {\r\n  transform: translate3d(9px, 0, 0) rotate(45deg) scale(0.7, 1); }\r\n\r\n.hamburger--arrow-r.is-active .hamburger-inner::after {\r\n  transform: translate3d(9px, 0, 0) rotate(-45deg) scale(0.7, 1); }*/\n.cuppa-menu-overlay {\n  position: fixed;\n  background: #000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  transition: all 1s linear; }\n\n.show-overlay {\n  display: block; }\n\n.hide-overlay {\n  display: none; }\n\n/* Hamburger Styles */\n.hamburger {\n  font-size: 50px;\n  float: left;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n  padding: 0;\n  margin-top: 12px;\n  margin-left: 15px;\n  cursor: pointer;\n  transition: transform .2s ease-in-out;\n  -moz-transition: transform .2s ease-in-out;\n  -webkit-transition: transform .2s ease-in-out;\n  vertical-align: middle;\n  border: 0 none;\n  background: transparent; }\n\n.hamburger::-moz-focus-inner {\n  padding: 0;\n  border: 0 none; }\n\n.hamburger:focus {\n  outline: 0; }\n\n.hamburger:before,\n.hamburger:after {\n  content: \"\"; }\n\n.hamburger:before,\n.hamburger .icon,\n.hamburger:after {\n  display: block;\n  width: 100%;\n  height: 4px;\n  margin: 0 0 8px;\n  transition: transform .2s ease-in-out;\n  -moz-transition: transform .2s ease-in-out;\n  -webkit-transition: transform .2s ease-in-out;\n  border-radius: .25em;\n  -moz-border-radius: 25em;\n  -webkit-border-radius: .25em;\n  background: #000; }\n\n.hamburger.is-active:before,\n.hamburger.is-active .icon,\n.hamburger.is-active:after {\n  background: #000; }\n\n.hamburger.hamburger-arrow-left.is-active {\n  transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -webkit-transform: rotate(180deg); }\n\n.hamburger.hamburger-arrow-left.is-active:before {\n  width: 23px;\n  transform: translateX(0.4em) translateY(0.2em) rotate(45deg);\n  -moz-transform: translateX(0.4em) translateY(0.2em) rotate(45deg);\n  -webkit-transform: translateX(19px) translateY(4px) rotate(45deg); }\n\n.hamburger.hamburger-arrow-left.is-active:after {\n  width: 23px;\n  transform: translateX(0.4em) translateY(-0.2em) rotate(-45deg);\n  -moz-transform: translateX(0.4em) translateY(-0.2em) rotate(-45deg);\n  -webkit-transform: translateX(19px) translateY(-4px) rotate(-45deg); }\n", ""]);

// exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(53));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var HandySyntaxHighlighterComponent = (function () {
    function HandySyntaxHighlighterComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HandySyntaxHighlighterComponent.prototype, "language", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HandySyntaxHighlighterComponent.prototype, "content", void 0);
    HandySyntaxHighlighterComponent = __decorate([
        core_1.Component({
            selector: 'handy-syntax-highlighter',
            template: "\n    <pre class=\"language-{{language}}\">\n      <code highlighter [language]=\"language\" [content]=\"content\"></code>\n    </pre>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], HandySyntaxHighlighterComponent);
    return HandySyntaxHighlighterComponent;
}());
exports.HandySyntaxHighlighterComponent = HandySyntaxHighlighterComponent;
//# sourceMappingURL=handy-syntax-highlighter.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var HighlighterDirective = (function () {
    function HighlighterDirective(eltRef) {
        this.eltRef = eltRef;
    }
    HighlighterDirective.prototype.ngAfterViewInit = function () {
        this.eltRef.nativeElement.innerHTML = Prism.highlight(this.content, Prism.languages[this.language]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HighlighterDirective.prototype, "language", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HighlighterDirective.prototype, "content", void 0);
    HighlighterDirective = __decorate([
        core_1.Directive({
            selector: '[highlighter]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlighterDirective);
    return HighlighterDirective;
}());
exports.HighlighterDirective = HighlighterDirective;
//# sourceMappingURL=highlighter.directive.js.map

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var highlighter_directive_1 = __webpack_require__(52);
var handy_syntax_highlighter_component_1 = __webpack_require__(51);
var Ng2HandySyntaxHighlighterModule = (function () {
    function Ng2HandySyntaxHighlighterModule() {
    }
    Ng2HandySyntaxHighlighterModule = __decorate([
        core_1.NgModule({
            declarations: [highlighter_directive_1.HighlighterDirective, handy_syntax_highlighter_component_1.HandySyntaxHighlighterComponent],
            exports: [handy_syntax_highlighter_component_1.HandySyntaxHighlighterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2HandySyntaxHighlighterModule);
    return Ng2HandySyntaxHighlighterModule;
}());
exports.Ng2HandySyntaxHighlighterModule = Ng2HandySyntaxHighlighterModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = "<span (clickOutside)=\"closeMenu()\">\r\n    <button (click)=\"menuToggle()\" class=\"hamburger hamburger-arrow-left\" [ngClass]=\"{'is-active': menuState, '': !menuState}\">\r\n        <span class=\"icon\"></span>\r\n    </button>\r\n<div class=\"menu-container cuppa-menu\" [ngClass]=\"{'show-menu': menuState, 'hide-menu': !menuState}\">\r\n    <ul>\r\n        <li *ngFor=\"let item of menulist\" (click)=\"onItemClick(item)\">\r\n            <a href=\"#\" (click)=\"toggleSubMenu(item)\">{{item.title}} \r\n                <i *ngIf=\"item.subItems && !item.expand\" class=\"fa fa-angle-down\"></i>\r\n                <i *ngIf=\"item.subItems && item.expand\" class=\"fa fa-angle-up\"></i>\r\n            </a>\r\n           <ul *ngIf=\"item.subItems\" class=\"sub-menu\" [hidden]=\"!item.expand\">\r\n               <li *ngFor=\"let subitem of item.subItems\" (click)=\"onItemClick(subitem)\"><a href=\"#\">{{subitem.title}}</a></li>\r\n           </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<span>\r\n<!--<div class=\"cuppa-menu-overlay\" [ngClass]=\"{'show-overlay': menuState, 'hide-overlay': !menuState}\"></div> -->"

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(48);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ })

});
//# sourceMappingURL=vendor.bundle.js.map