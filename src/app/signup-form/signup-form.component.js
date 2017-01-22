"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SignupFormComponent = (function () {
    function SignupFormComponent() {
        this.user = {
            name: 'Angular',
            account: {
                email: '',
                confirm: ''
            }
        };
    }
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'app-signup-form',
            templateUrl: './signup-form.component.html',
            styleUrls: ['./signup-form.component.css']
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
