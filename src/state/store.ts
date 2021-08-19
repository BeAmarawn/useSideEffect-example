import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';

import { colorGeneratorReducer as colorGenerator } from './modules/ColorGenerator/reducer';

const reducer = combineReducers({
  colorGenerator,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export { store };
