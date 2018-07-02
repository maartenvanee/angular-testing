import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Title', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Angular Testing');
    });

    it('should click three times and reset with matching points', () => {
        page.navigateTo();
        expect(page.getPoints()).toBe('1');

        page.getPlusButton().click();
        page.getPlusButton().click();
        page.getPlusButton().click();

        expect(page.getPoints()).toBe('4');
        page.getResetButton().click();
        expect(page.getPoints()).toBe('0');
    });
});
