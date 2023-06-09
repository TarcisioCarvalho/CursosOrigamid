        const SOMAR = "Somar";
        const INCREMENTAR = "Incrementar";
        const ABRIR = "Abrir";
        const FECHAR = "Fechar";

        function incrementar(){
          return {type:INCREMENTAR};
        }
        function somar(payload){
          return {type:SOMAR,payload};
        }
        const initialState = 10;

        function contador(state = initialState,action){
          if(action.type === "Somar") return state + payload;
          if(action.type === INCREMENTAR) return ++state;
          return state
        };

        function modal(state = true,action){
          switch (action.type) {
            case ABRIR:
              return true
            case FECHAR:
              return false;
            default:
              return state;
          }
        }
        const reducer = Redux.combineReducers({contador,modal});
        const store = Redux.createStore(reducer);

        function Render(){
          const {contador,modal} = store.getState();
          const total = document.getElementById("total");
          total.innerText = contador;
          modal?total.style.display="block":total.style.display="none";
        }
        const unsubscribe =  store.subscribe(Render);
        Render();
        store.dispatch(somar(20));
        const button = document.getElementById("incrementar");
        button.addEventListener("click",() => store.dispatch(incrementar()))
        const abrir = document.getElementById("abrir");
        const fechar = document.getElementById("fechar");
        abrir.addEventListener("click",()=>store.dispatch({type:ABRIR}))
        fechar.addEventListener("click",()=>store.dispatch({type:FECHAR})) 