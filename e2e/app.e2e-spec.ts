import { ProfileSiteAngular2Page } from './app.po';

describe('profile-site-angular2 App', () => {
  let page: ProfileSiteAngular2Page;

  beforeEach(() => {
    page = new ProfileSiteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
