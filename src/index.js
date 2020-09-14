/**
 * Este é o componente principal da aplicação, instancia as telas de navegação
 * e importa o ReactotronConfig para configurar as rotas dos componentes
 *
 */
import React from 'react';

import '~/config/ReactotronConfig';
import MainScreen from '~/pages/main/mainScreen';

/**
 * Elemento JSX com o as principais as telas de navegação da aplicação
 * 
 */
const App = () => (
  <>
    <MainScreen/>
  </>
);

export default App;
