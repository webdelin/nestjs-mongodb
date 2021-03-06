"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateReviewDto = void 0;
var class_validator_1 = require("class-validator");
var CreateReviewDto = /** @class */ (function () {
    function CreateReviewDto() {
    }
    __decorate([
        class_validator_1.IsString()
    ], CreateReviewDto.prototype, "name");
    __decorate([
        class_validator_1.IsString()
    ], CreateReviewDto.prototype, "title");
    __decorate([
        class_validator_1.IsString()
    ], CreateReviewDto.prototype, "description");
    __decorate([
        class_validator_1.Max(5),
        class_validator_1.Min(1, { message: 'Review spll nich kleiner 1 sein' }),
        class_validator_1.IsNumber()
    ], CreateReviewDto.prototype, "rating");
    __decorate([
        class_validator_1.IsString()
    ], CreateReviewDto.prototype, "productId");
    return CreateReviewDto;
}());
exports.CreateReviewDto = CreateReviewDto;
