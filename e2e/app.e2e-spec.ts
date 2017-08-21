import { StockThaiPage } from './app.po';

describe('stock-thai App', () => {
  let page: StockThaiPage;

  beforeEach(() => {
    page = new StockThaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
