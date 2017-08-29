import { CalculadoraPage } from './app.po';

describe('calculadora App', () => {
  let page: CalculadoraPage;

  beforeEach(() => {
    page = new CalculadoraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
