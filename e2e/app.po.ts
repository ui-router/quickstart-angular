import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getUrl() {
    return browser.getCurrentUrl().then(result => result.replace(/^http:..[^/]*/, ''));
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLinks() {
    return element.all(by.tagName('a'));
  }

  getLink(text: string) {
    return element.all(by.linkText(text));
  }

  getViewContent() {
    return element.all(by.tagName('ui-view')).first().getText();
  }
}
