/* function reducer(state=0,action){
    switch (action.type) {
        case "MODIFICAR_WIDTH":
            /* const caixa = document.getElementById("");
            caixa.style.width =  action.payload + "px"; 
            return action.payload;
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

function render(){
    const caixa = document.getElementById("caixa");
    caixa.style.width =  store.getState() + "px";
};

store.subscribe(render);
store.dispatch({type:"MODIFICAR_WIDTH",payload:100}) */

/* const obj1 = {
    nome:"Tarcísio",
    idade:32
};

const obj2 = immer.produce(obj1,(draft) => {draft.idade = 35});

console.log(obj2); */
const initialState = {
    nome:"Tarcísio",
    idade:32
};
const reducer = immer.produce((state,action) => {
    switch (action.type) {
        case "MODIFICAR_NOME":
            state.nome = action.payload;
            break;
        case "MODIFICAR_IDADE":
            state.idade = action.payload;
            break;
    }
},initialState);

const store = Redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

console.log(store.getState());
store.dispatch({type:"MODIFICAR_NOME",payload:"Maria"});
console.log(store.getState());
store.dispatch({type:"MODIFICAR_IDADE",payload:40});


