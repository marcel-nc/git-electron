import { ElectronAppPage } from './app.po';

describe('electron-app App', () => {
  let page: ElectronAppPage;

  beforeEach(() => {
    page = new ElectronAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
