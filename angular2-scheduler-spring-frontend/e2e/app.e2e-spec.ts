import { Angular2SchedulerSpringFrontendPage } from './app.po';

describe('angular2-scheduler-spring-frontend App', () => {
  let page: Angular2SchedulerSpringFrontendPage;

  beforeEach(() => {
    page = new Angular2SchedulerSpringFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
