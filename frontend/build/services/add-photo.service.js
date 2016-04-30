System.register(["angular2/core", 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AddPhotoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AddPhotoService = (function () {
                function AddPhotoService(http) {
                    this.http = http;
                }
                AddPhotoService.prototype.sendPhoto = function (photo) {
                    var url = "http://localhost:8080/rest/photo/add";
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
                    return this.http.post(url, JSON.stringify(photo), { headers: headers1 });
                };
                AddPhotoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AddPhotoService);
                return AddPhotoService;
            }());
            exports_1("AddPhotoService", AddPhotoService);
        }
    }
});
//# sourceMappingURL=add-photo.service.js.map