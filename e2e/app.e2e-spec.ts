import { FPSWebPage } from './app.po';

describe('fps-web App', function() {
  let page: FPSWebPage;

  beforeEach(() => {
    page = new FPSWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
