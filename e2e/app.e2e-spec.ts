import { KpvMonitorPage } from './app.po';

describe('kpv-monitor App', function() {
  let page: KpvMonitorPage;

  beforeEach(() => {
    page = new KpvMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
