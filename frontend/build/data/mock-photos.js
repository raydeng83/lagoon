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
    var MockPhotos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MockPhotos = (function () {
                function MockPhotos() {
                    this.photos = [
                        { "photoId": "photo1", "userId": "user1", "title": "This is a Photo Title", "description": "This is a photo description", "time": "04/16/2016", "link": "resources/static/pic/sample1.jpg", "likes": 53, "comments": [{ "userId": "user2", "content": "This is an awesome picture!" }, { "userId": "user3", "content": "The picture looks really good!" }] },
                        { "photoId": "photo2", "userId": "user2", "title": "This is a title", "description": "This is a description", "time": "03/27/2016", "link": "resources/static/pic/sample2.jpg", "likes": 21, "comments": [] },
                        { "photoId": "photo3", "userId": "user1", "title": "This is a title", "description": "This is a description", "time": "05/28/2016", "link": "resources/static/pic/sample3.jpg", "likes": 10, "comments": [] },
                        { "photoId": "photo4", "userId": "user3", "title": "This is a title", "description": "This is a description", "time": "04/20/2016", "link": "resources/static/pic/sample4.jpg", "likes": 5, "comments": [] },
                        { "photoId": "photo5", "userId": "user2", "title": "This is a title", "description": "This is a description", "time": "07/14/2016", "link": "resources/static/pic/sample5.jpg", "likes": 14, "comments": [] },
                        { "photoId": "photo6", "userId": "user3", "title": "This is a title", "description": "This is a description", "time": "01/27/2016", "link": "resources/static/pic/sample6.jpg", "likes": 9, "comments": [] },
                        { "photoId": "photo7", "userId": "user3", "title": "This is a title", "description": "This is a description", "time": "02/15/2016", "link": "resources/static/pic/sample7.jpg", "likes": 33, "comments": [] }
                    ];
                }
                MockPhotos.prototype.getPhotos = function () {
                    return this.photos;
                };
                MockPhotos = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MockPhotos);
                return MockPhotos;
            }());
            exports_1("MockPhotos", MockPhotos);
        }
    }
});
//# sourceMappingURL=mock-photos.js.map