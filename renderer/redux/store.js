import { createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;