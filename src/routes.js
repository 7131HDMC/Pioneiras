/**
 * Componente que define as telas de navegação do aplicativo
 */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Tree from '~/pages/treeScreen/treeScreen';
import List from '~/pages/list';
import Info from '~/pages/info';
/**
 * Criando um Container de Navegação
 * @author Hari Dasa <haridasafiuza@gmail.com>
 */
const Routes = createAppContainer(createSwitchNavigator({ Tree, List, Info }));

export default Routes;
