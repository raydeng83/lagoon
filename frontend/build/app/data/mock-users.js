System.register(['angular2/core', '../services/photo.service'], function(exports_1, context_1) {
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
    var core_1, photo_service_1;
    var MockUsers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            }],
        execute: function() {
            MockUsers = (function () {
                function MockUsers(_photoService) {
                    this.photos = _photoService.getPhotos();
                    this.users = [
                        { "userId": "user1", "firstName": "John", "lastName": "Adams", "userName": "JAdams", "password": "password", "joinDate": "04/16/2016", "photos": [this.photos[0], this.photos[2]], "liked": ["photo1"] },
                        {
                            "userId": "user2", "firstName": "Ben", "lastName": "Franklin", "userName": "BFranklin", "password": "password", "joinDate": "03/27/2016", "photos": [this.photos[1], this.photos[4]], "liked": []
                        }, {
                            "userId": "user3", "firstName": "Tom", "lastName": "Jefferson", "userName": "TJefferson", "password": "password", "joinDate": "03/27/2016", "photos": [this.photos[3], this.photos[5], this.photos[6]], "liked": []
                        }
                    ];
                }
                MockUsers.prototype.getUsers = function () {
                    return this.users;
                };
                MockUsers = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [photo_service_1.PhotoService])
                ], MockUsers);
                return MockUsers;
            }());
            exports_1("MockUsers", MockUsers);
        }
    }
});
//# sourceMappingURL=mock-users.js.map