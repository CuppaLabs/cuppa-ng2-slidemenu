import { CuppaNg2SlidemenuPage } from './app.po';

describe('cuppa-ng2-slidemenu App', () => {
  let page: CuppaNg2SlidemenuPage;

  beforeEach(() => {
    page = new CuppaNg2SlidemenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
