System.register(['angular2/core', '../services/user.service', 'angular2/router', '../services/global.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1, router_1, global_service_1;
    var MyAlbum;
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
            },
            function (global_service_1_1) {
                global_service_1 = global_service_1_1;
            }],
        execute: function() {
            MyAlbum = (function () {
                function MyAlbum(_userService, _router, globalService) {
                    this._router = _router;
                    this.user = _userService.getUserByName(localStorage.getItem("currentUserName"));
                }
                MyAlbum.prototype.onSelect = function (photo) {
                    this.selectedPhoto = photo;
                    this._router.navigate(['ImageDetail', { id: this.selectedPhoto.photoId }]);
                };
                MyAlbum = __decorate([
                    core_1.Component({
                        selector: 'my-album',
                        templateUrl: 'app/components/my-album.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, global_service_1.GlobalService])
                ], MyAlbum);
                return MyAlbum;
            }());
            exports_1("MyAlbum", MyAlbum);
        }
    }
});
//# sourceMappingURL=my-album.component.js.map