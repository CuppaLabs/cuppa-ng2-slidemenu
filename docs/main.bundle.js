var ac_main =
webpackJsonpac__name_([0],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* unused harmony export ENV_PROVIDERS */
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(16);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(2);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(442);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(444);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/*
 * Angular 2 decorators and services
 */

/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
        this.menuItemsArray = [
            { "title": "Electricity", "link": "#" },
            { "title": "Mobile Bill", "link": "#" },
            { "title": "Home and Kitchen", "link": "#",
                "subItems": [
                    { "title": "Furniture", "link": "#" },
                    { "title": "Cookware", "link": "#" },
                ]
            },
            { "title": "Car and Bike Accessories", "link": "#",
                "subItems": [
                    { "title": "Tyres and Alloys", "link": "#" },
                    { "title": "Comfort and Safety", "link": "#" },
                ]
            },
        ];
        this.npminstallScript = 'npm install cuppa-ng2-slidemenu';
        this.installScript = "import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';";
        this.moduleScript = "import { NgModule } from '@angular/core';\n" +
            "import { BrowserModule } from '@angular/platform-browser';\n" +
            "import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';\n" +
            "import { AppComponent } from './app.component';\n" +
            "\n" +
            "@NgModule({\n" +
            "   bootstrap: [ AppComponent ],\n" +
            "   declarations: [AppComponent],\n" +
            "   imports: [SlideMenuModule] // Import SlideMenu module variable here \n" +
            "})\n" +
            "export class AppModule {\n" +
            "}";
        this.htmlTag = '<cuppa-slidemenu [menulist]="menuItemsArray" (open)="onMenuOpen()" (close)="onMenuClose()" (onItemSelect)="onItemSelect($event)"></cuppa-slidemenu>';
        this.jsScript = 'private menuItemsArray: any[] = [ \n' +
            '       {"title":"Electricity","link":"#"},\n' +
            '       {"title":"Mobile Bill","link":"#"},\n' +
            '       {"title":"Home and Kitchen","link":"#",\n' +
            '       "subItems":[\n' +
            '                   {"title":"Furniture","link":"#"},\n' +
            '                   {"title":"Cookware","link":"#"},\n' +
            '                  ]\n' +
            '       },\n' +
            '       {"title":"Car and Bike Accessories","link":"#",\n' +
            '        "subItems":[\n' +
            '                     {"title":"Tyres and Alloys","link":"#"},\n' +
            '                     {"title":"Comfort and Safety","link":"#"},\n' +
            '                    ]\n' +
            '       },\n' +
            ' ];\n' +
            'public onMenuClose(){\n' +
            '    console.log("menu closed");\n' +
            '}\n' +
            'public onMenuOpen(){\n' +
            '    console.log("menu Opened");\n' +
            '}\n' +
            'private onItemSelect(item:any){\n' +
            '    console.log(item);\n' +
            '};';
    }
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(57)
        ],
        template: __webpack_require__(55)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_handy_syntax_highlighter__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_handy_syntax_highlighter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_handy_syntax_highlighter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });




// App is our top level component



/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__["a" /* SlideMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_handy_syntax_highlighter__["Ng2HandySyntaxHighlighterModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n         <cuppa-slidemenu [menulist]=\"menuItemsArray\" (open)=\"onMenuOpen()\" (close)=\"onMenuClose()\" (onItemSelect)=\"onItemSelect($event)\"></cuppa-slidemenu>\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"https://cuppalabs.github.io/cuppa-ng2-slidemenu/\">\r\n          <img alt=\"Brand\" src=\"assets/img/cuppa-logo.png\">\r\n          Cuppa Slide Menu</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n              <li><a href=\"#Getting_Started_12\">Getting Started<span class=\"sr-only\">(current)</span></a></li>\r\n              <li><a href=\"#Getting_Started_12\">Installation</a></li>\r\n              <li><a href=\"#Installation_14\">Usage</a></li>\r\n              <li><a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu\">Github</a></li>\r\n\r\n            </ul>\r\n        </div><!--/.navbar-collapse -->\r\n      </div>\r\n    </nav>\r\n    <div class=\"jumbotron col-md-12\">\r\n      <div class=\"col-md-6\">\r\n        <img style=\"width:18%;\" src=\"assets/img/angular-logo.png\">\r\n        <h1 class=\"component-title\">Cuppa Slide Menu</h1>\r\n        <h2>Angular 2 slide out navigation menu for web and mobile</h2>\r\n        <h4>Click on hamburger menu on top left  corner</h4>\r\n\r\n        <p class=\"bt-group\">\r\n            <a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu\" target=\"_blank\" type=\"button\" class=\"btn btn-danger btn-lg\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i><span class=\"hidden-xs\">Github</span></a>\r\n            <a href=\"#\" type=\"button\" class=\"btn btn-danger btn-lg\"><i class=\"fa fa-tv\" aria-hidden=\"true\"></i><span class=\"hidden-xs\">Demo</span></a>\r\n            <a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu/archive/master.zip\" type=\"button\" class=\"btn btn-danger btn-lg\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i><span class=\"hidden-xs\"> Download </span></a>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"iphone-img\">\r\n        <img style=\"width: 71%;\" src=\"assets/img/iphone-empty.png\">\r\n        <video type=\"video/webm\" loop=\"\" autoplay=\"\" src=\"assets/img/demo4.webm\"></video>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-md-8 col-md-offset-2 component-details\">\r\n\r\n    <div id=\"preview\" preview=\"\" debounce=\"150\">\r\n        <h2><a id=\"Getting_Started_12\"></a>Getting Started</h2>\r\n        <h3><a id=\"Installation_14\"></a>Installation</h3>\r\n        <ol>\r\n        <li>\r\n        <p>The Slide menu package is published on the <a href=\"https://www.npmjs.com/package/cuppa-ng2-slidemenu\">npm</a> Registry.</p>\r\n        </li>\r\n        <li>\r\n        <p>Install the package :<br>\r\n         <handy-syntax-highlighter  [language]=\"'markup'\" [content]=\"npminstallScript\"></handy-syntax-highlighter>\r\n        </li>\r\n        <li>\r\n        <p>Once installed import <code>SlideMenuModule</code> from the installed package into your module as follows:</p>\r\n        </li>\r\n        <li style=\"list-style-type: none\">\r\n            <handy-syntax-highlighter  [language]=\"'typescript'\" [content]=\"installScript\"></handy-syntax-highlighter>\r\n        </li>\r\n        </ol>\r\n        <h3><a id=\"Installation_14\"></a>Usage</h3>\r\n        <ol>\r\n        <li>Import the <code>SlideMenuModule</code> in your <code>ngModule</code> as follows:</li>\r\n        <li style=\"list-style-type: none\">\r\n            <handy-syntax-highlighter  [language]=\"'typescript'\" [content]=\"moduleScript\"></handy-syntax-highlighter>\r\n        </li>\r\n        <li value=2>Place the component html tag in the template where the hamburger menu needs to be rendered.</li>\r\n        <li style=\"list-style-type: none\">\r\n            <handy-syntax-highlighter  [language]=\"'html'\" [content]=\"htmlTag\"></handy-syntax-highlighter>\r\n        </li>\r\n        <li value=\"3\">\r\n            Component requires a <code>menulist</code> to pass data as array of objects to the component, as follows:\r\n        </li>\r\n        <li style=\"list-style-type: none\">\r\n             <handy-syntax-highlighter  [language]=\"'typescript'\" [content]=\"jsScript\"></handy-syntax-highlighter>\r\n        </li>\r\n        </ol>\r\n        <p>Thats all Folks !! You are good to go.</p>\r\n        <h3>For Demo, click on hamburger on top left corner of the page</h3>\r\n        <p>Please raise any issues <a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu/issues\">here</a></p>\r\n        <p>To run the code and build in your local, follw the below steps</p>\r\n        <ul>\r\n        <li>git clone <code>https://github.com/CuppaLabs/angular2-dataGrid.git</code></li>\r\n        <li>npm install</li>\r\n        <li>npm start</li>\r\n        <li>Go to <code>http://localhost:3000</code> where your app will run.</li>\r\n        </ul>\r\n        <h2><a id=\"Licence_79\"></a>Licence</h2>\r\n        <p>This project is licensed under the MIT license. See the <a href=\"LICENSE\">LICENSE</a> file for more info.</p>\r\n        <h2><a id=\"Author_106\"></a>Author</h2>\r\n        <p>Pradeep Kumar Terli  @ <a href=\"http://www.cuppalabs.com\">Cuppa Labs</a></p>\r\n        </div>\r\n\r\n    </div>"

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(49);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(112);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(143);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(440);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(441);

/***/ })

},[199]);
//# sourceMappingURL=main.bundle.js.map
