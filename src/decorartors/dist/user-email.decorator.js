"use strict";
exports.__esModule = true;
exports.UserEmail = void 0;
var common_1 = require("@nestjs/common");
exports.UserEmail = common_1.createParamDecorator(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});
