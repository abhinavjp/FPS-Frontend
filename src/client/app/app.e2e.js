"use strict";
var protractor_1 = require("protractor");
describe('App', function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should have a title', function () {
        var subject = protractor_1.browser.getTitle();
        var result = 'Angular2 Webpack Starter by @gdi2290 from AbhinavJP';
        expect(subject).toEqual(result);
    });
    it('should have header', function () {
        var subject = protractor_1.element(protractor_1.by.css('h1')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have <home>', function () {
        var subject = protractor_1.element(protractor_1.by.css('app home')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have buttons', function () {
        var subject = protractor_1.element(protractor_1.by.css('button')).getText();
        var result = 'Submit Value';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=app.e2e.js.map