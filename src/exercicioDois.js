import React,{useState} from 'react';

const Login = props=>{
    const[inicial,final] = useState({logout:false, descricao: "login",imagem:"login.jpg"});
    const[contInicial,contFinal] = useState({cont: 0});
   const UsuarioLogado =(event)=>{
    let login;
     let nomeBotao; 
     let imagens;   
    if(inicial.logout === true ){
      nomeBotao= "logout"
      imagens="logout.jpg"
       login = false
       }else{
        nomeBotao ="login"
        imagens="login.jpg"
        login = true
       }
       final({logout: login, descricao: nomeBotao,imagem:imagens});
    }
 
    return (
       <>
          <div >
            <img src={inicial.imagem} width="20%" heigth="20%"/>
           
           <form> 
            <input type="button" value ={inicial.descricao} onClick={UsuarioLogado} />
            </form>   
        
        </div>
        </>
        );
      
    } 
      
  
  
  export default Login;