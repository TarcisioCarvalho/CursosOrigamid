function reducer(state=0,action){
    switch (action.type) {
        case "MODIFICAR_WIDTH":
            /* const caixa = document.getElementById("");
            caixa.style.width =  action.payload + "px"; */
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
store.dispatch({type:"MODIFICAR_WIDTH",payload:100})

