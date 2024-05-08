import { useNavigate } from "react-router-dom";
function ListaProdutos(){

   //useNavigate tem a função de fazer redirecionamento de componentes
   const navigate = useNavigate();
   //criando a função handleLogout
   const handleLogout = () => {
     sessionStorage.removeItem('usuario');
     sessionStorage.removeItem('senha');
     alert('saindo da sessão...');
     navigate('/');
   };
  return(
    <>
 <button onClick={handleLogout}>Logout</button>
    
    </>
  )
}
export default ListaProdutos