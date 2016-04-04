System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.titleName = "Hello from home";
                }
                HomeComponent.prototype.ngOnInit = function () { };
                HomeComponent = __decorate([
                    core_1.Component({
                        template: '<h1>{{titleName}}</h1>',
                        selector: 'home'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJO29CQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUE7Z0JBQ3RDLENBQUM7Z0JBRUQsZ0NBQVEsR0FBUixjQUFhLENBQUM7Z0JBVmxCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLE1BQU07cUJBQ25CLENBQUM7O2lDQUFBO2dCQVFGLG9CQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCx5Q0FPQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiAnPGgxPnt7dGl0bGVOYW1lfX08L2gxPicsXHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHVibGljIHRpdGxlTmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IFwiSGVsbG8gZnJvbSBob21lXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
