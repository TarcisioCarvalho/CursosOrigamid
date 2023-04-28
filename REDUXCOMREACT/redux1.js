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
          console.log("Teste");
          console.log(action.type);
          switch (action.type) {
            case ABRIR:
              return true
              break;
            case FECHAR:
              return false;
              break;
            default:
              return state;
              break;
          }
        }
        const reducer = Redux.combineReducers({contador,modal});
        const store = Redux.createStore(reducer);

        function Render(){
          const {contador,modal} = store.getState();
          console.log(modal);
          const total = document.getElementById("total");
          total.innerText = contador;
          modal?total.style.display="block":total.style.display="none";
        }
        store.subscribe(Render);
        Render();
        const button = document.getElementById("incrementar");
        button.addEventListener("click",() => store.dispatch(incrementar()))
        const abrir = document.getElementById("abrir");
        const fechar = document.getElementById("fechar");
        abrir.addEventListener("click",()=>store.dispatch({type:ABRIR}))
        fechar.addEventListener("click",()=>store.dispatch({type:FECHAR})) */