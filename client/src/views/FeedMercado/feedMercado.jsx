import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FeedMercado.module.css';

function FeedMercado() {
  const [produto_mercado, setProdutoMercado] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    document.title = "Feed Mercado";
    carregarProdutos();
  }, []);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoSalvo) {
      setCarrinho(carrinhoSalvo);
    }
  }, []);

  async function carregarProdutos() {
    try {
      const resposta = await fetch('/cadastroPM');

      if (!resposta.ok) {
        throw new Error("Erro na requisição: " + resposta.status);
      } else {
        const dados = await resposta.json();
        setProdutoMercado(dados);
      }
    } catch (error) {
      console.error("Erro ao mostrar os produtos", error);
    }
  }

  const adicionarAoCarrinho = (produto) => {
    const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  return (
    <div className="conteudo">
      <div className="container">
        <div className={styles.prod_container}>
          {produto_mercado.map(produto => (
            <div className={styles.prod_item} key={produto.id_produto_mercado}>
              <Link to={`/produto/${produto.id_produto_mercado}`}>
                <img src={`http://localhost:5000/img/${produto.foto_produto}`} alt={produto.nome_produto} />
                <span>{produto.nome_produto}</span>
                <span>{produto.marca_produto}</span>
                <span>R$ {produto.preco_produto}</span>
              </Link>
              oi
              <button onClick={() => adicionarAoCarrinho(produto)}>
                {carrinho.find(item => item.id_produto_mercado === produto.id_produto_mercado)
                  ? 'Produto no carrinho'
                  : 'Adicionar ao carrinho'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedMercado;
