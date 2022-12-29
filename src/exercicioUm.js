import React,{useState} from 'react';

const CaixaDeTexto = props=>{
    const[textoInicial,textoFinal] = useState({palavra: null});
    const[contInicial,contFinal] = useState({cont: 0});
   const contadorPalavra =(event)=>{
        //if(textoInicial.palavra != null && contInicial.cont >= 0 ){
          console.log(event.target.value.length)
           let contador = event.target.value.length;
            textoFinal( {palavra:event.target.value});
            contFinal({cont:contador});
       //}
    }

    return (
       <>
          <div >
          <form>
            <div>
            <input type="text"  placeholder="Insira a palavra a ser contada" onChange={contadorPalavra}/>
            </div>
          </form>
        </div>
        <h3>A palavra {textoInicial.palavra}</h3>
        <h3>A quantidade de letras final {contInicial.cont}</h3>
        </>
        );
      
    } 
      
  
  
  export default CaixaDeTexto;