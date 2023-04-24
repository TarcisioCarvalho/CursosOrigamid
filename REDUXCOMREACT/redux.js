import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { count: 0 };

// Reducer que atualiza o estado da aplicação
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Configuração do redux-persist para persistir o estado no Local Storage
const persistConfig = {
  key: 'root',
  storage,
};

// Criação da store do Redux com o reducer configurado com o redux-persist
const persistedReducer = persistReducer(persistConfig, counterReducer);
const store = createStore(persistedReducer);

// Inicialização do persistor do redux-persist
const persistor = persistStore(store);

// Dispatch de actions para alterar o estado da aplicação
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// Utilização do persistor do redux-persist para persistir o estado no Local Storage
persistor.flush();

// Quando a página é recarregada, o estado da aplicação é restaurado a partir do Local Storage