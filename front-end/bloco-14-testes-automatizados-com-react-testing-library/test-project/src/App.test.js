import React from 'react';
import { screen } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('Testes gerais do component App', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
  
  // it('deve testar um caminho não existente e a renderização do Not Found', () => {
  //   const history = createMemoryHistory()
  // history.push('/some/bad/route')
  //   render(
  //   <Router history={history}>
  //     <App />
  //   </Router>,
  // )
  
  //   const notFoundTitle = screen.getByRole('heading',
  //     { name: 'Página não encontrada' });
  //   expect(notFoundTitle).toBeInTheDocument();
  // });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('pagina-nao-encontrada');

    const { pathname } = history.location;
    console.log(pathname);
    expect(pathname).toBe('/pagina-nao-encontrada');

    const title =  screen.getByRole('heading', { name: /Página não encontrada/i, level: 1 });
    expect(title).toBeDefined();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});
