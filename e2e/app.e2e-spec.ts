import { ITONCoreWebAppPage } from './app.po';

describe('itoncore-web-app App', () => {
  let page: ITONCoreWebAppPage;

  beforeEach(() => {
    page = new ITONCoreWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
