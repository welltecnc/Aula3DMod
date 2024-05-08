import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function ListaProdutos(){
  //HOOK- useState manipula a variavel adcionando ou alterando em tempo real
  const [produtos,setProdutos]=useState([]);
   
   //useNavigate tem a função de fazer redirecionamento de componentes
   const navigate = useNavigate();
   //criando a função handleLogout
   const handleLogout = () => {
     sessionStorage.removeItem('usuario');
     sessionStorage.removeItem('senha');
     alert('saindo da sessão...');
     navigate('/');
   };
/* HOOK- useEffect = é um efeito colateral par trazer
informações da api como promise*/
   useEffect(()=>{
    fetch("http://localhost:5000/produtos")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setProdutos(data);
    })
   },[]);
   //criando a função deletar 
   const handleDelete =((id)=>{
    fetch(`http://localhost:5000/produtos/${id}`,{
      method:'delete',
    }).then(()=>{
      navigate("/listaprodutos")
    })
   })

  return(
    <>
 <button onClick={handleLogout}>Logout</button>

 <h1>Lista Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descricao</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>{item.valor}</td>
              <td></td>
              <td>
                <Link to={`/editarproduto/${item.id}`}>
                <FaEdit />
                </Link>
              </td>
              <td>
  <button onClick={handleDelete.bind(this,item.id)}>
                <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </>
  )
}
export default ListaProdutos