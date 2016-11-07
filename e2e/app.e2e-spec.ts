import { TasktrackerPage } from './app.po';

describe('tasktracker App', function() {
  let page: TasktrackerPage;

  beforeEach(() => {
    page = new TasktrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
