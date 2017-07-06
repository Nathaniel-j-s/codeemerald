import { CodeemeraldPage } from './app.po';

describe('codeemerald App', () => {
  let page: CodeemeraldPage;

  beforeEach(() => {
    page = new CodeemeraldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
