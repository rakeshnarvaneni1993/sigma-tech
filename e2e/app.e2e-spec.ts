import { SigmasoftPage } from './app.po';

describe('sigmasoft App', () => {
  let page: SigmasoftPage;

  beforeEach(() => {
    page = new SigmasoftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
