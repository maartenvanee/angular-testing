import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitleText() {
        return element(by.css('h1')).getText();
    }

    getPoints() {
        return element(by.cssContainingText('div', 'Points')).$('span').getText();
    }

    getPlusButton() {
        return element(by.cssContainingText('button', 'Plus'));
    }

    getResetButton() {
        return element(by.cssContainingText('button', 'Reset'));
    }
}
