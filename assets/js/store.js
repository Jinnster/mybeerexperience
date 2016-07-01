/**
 * Created by Jinhua on 27-6-2016.
 */

import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

export default store;
