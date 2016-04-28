System.register(['angular2/core', '../services/user.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, user_service_1, router_1;
    var PhotoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PhotoList = (function () {
                function PhotoList(_userService, _router) {
                    var _this = this;
                    this._router = _router;
                    _userService.getUsers().then(function (users) { return _this.users = users; });
                }
                PhotoList.prototype.onSelect = function (photo) {
                    this.selectedPhoto = photo;
                    this._router.navigate(['ImageDetail', { id: this.selectedPhoto.photoId }]);
                };
                PhotoList = __decorate([
                    core_1.Component({
                        selector: 'photo-list',
                        templateUrl: 'app/components/photo-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], PhotoList);
                return PhotoList;
            }());
            exports_1("PhotoList", PhotoList);
        }
    }
});
//# sourceMappingURL=photo-list.component.js.map