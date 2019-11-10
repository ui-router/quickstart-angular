import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('quickstart-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ui-router!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should render 3 links', () => {
    page.navigateTo();
    expect(page.getLinks().count()).toEqual(3);
  });

  it('should render Hello state', () => {
    page.navigateTo();
    page.getLink('Hello').click();
    expect(page.getUrl()).toEqual('/hello');
    expect(page.getViewContent()).toEqual('hello works!');
  });

  it('should render World state', () => {
    page.navigateTo();
    page.getLink('World').click();
    expect(page.getUrl()).toEqual('/world');
    expect(page.getViewContent()).toEqual('world works!');
  });

  it('should render World.nest state', () => {
    page.navigateTo();
    page.getLink('World.nest').click();
    expect(page.getUrl()).toEqual('/world/nest');
    expect(page.getViewContent()).toEqual('world works!\nnest works!');
  });
});
