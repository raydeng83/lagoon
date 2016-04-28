System.register(['angular2/core', '../services/photo.service', './image-comments.component', '../services/user.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, photo_service_1, image_comments_component_1, user_service_1, router_1;
    var ImageDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (image_comments_component_1_1) {
                image_comments_component_1 = image_comments_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ImageDetail = (function () {
                function ImageDetail(_photoService, _userService, _routeParams) {
                    this._photoService = _photoService;
                    this._userService = _userService;
                    this._routeParams = _routeParams;
                }
                ImageDetail.prototype.goBack = function () {
                    window.history.back();
                };
                ImageDetail.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.photo = this._photoService.getPhotoById(id);
                    this.user = this._userService.getUserById(this.photo.userId);
                    if (this.user.liked.filter(function (photoId) { return photoId == _this.photo.photoId; })[0]) {
                        this.like = "Unlike";
                    }
                    else {
                        this.like = "Like";
                    }
                };
                ImageDetail.prototype.likeDisplay = function () {
                    if (this.like == "Like") {
                        this.like = "Unlike";
                        this.photo.likes += 1;
                        this.user.liked.push(this.photo.photoId);
                    }
                    else {
                        this.like = "Like";
                        this.photo.likes -= 1;
                        var index = this.user.liked.indexOf(this.photo.photoId, 0);
                        if (index > -1) {
                            this.user.liked.splice(index, 1);
                        }
                    }
                };
                ImageDetail = __decorate([
                    core_1.Component({
                        selector: 'image-detail',
                        templateUrl: 'app/components/image-detail.component.html',
                        directives: [image_comments_component_1.ImageComments]
                    }), 
                    __metadata('design:paramtypes', [photo_service_1.PhotoService, user_service_1.UserService, router_1.RouteParams])
                ], ImageDetail);
                return ImageDetail;
            }());
            exports_1("ImageDetail", ImageDetail);
        }
    }
});
//# sourceMappingURL=image-detail.component.js.map