import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

function Produtos() {
  //criando a variavel id e usando o HOOK useParams
  let { id } = useParams();
  //criando o useState do novoProduto
  const [novoproduto, setNovoProduto] = useState({
    id,
    nome: '',
    descricao: '',
    valor: '',
  });
//criando a função handleChange

const handleChange =(e)=>{
//...(spred) pega os dados antigos e junta com os dados novos
setNovoProduto({...novoproduto,[e.target.name]:e.target.value})
}
//criando o metodo put e post

let metodo ="post";
if(id){
  metodo="put"
}
const handleSubmit =(e)=>{
e.preventDefault();
fetch(`http://localhost:5000/produtos/${id ? id :"" }
`,{
 method:metodo,
 headers:{
    'Content-Type':'application/json',
 },
 body:JSON.stringify(novoproduto),
}).then(()=>{
  window.location="/listaprodutos"
})
}

useEffect(()=>{
  if(id){
    fetch(`http://localhost:5000/produtos/${id}`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setNovoProduto(data);
    })
  }

 },[id]);





  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={novoproduto.nome}
          placeholder="Digite o nome do Produto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao"
          value={novoproduto.descricao}
          placeholder="Digite a descricao do produto"
          onChange={handleChange}
        />

        <input
          type="text"
          name="valor"
          value={novoproduto.valor}
          placeholder="Digite o valor do produto"
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
        <Link to="/listaprodutos">Cadastrar</Link>
      </form>
    </>
  );
}
export default Produtos;
