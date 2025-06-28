import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [formProduto, setFormProduto] = useState({ nome: '', preco: '', categoriaId: '' });
  const [novaCategoria, setNovaCategoria] = useState('');
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          axios.get('/api/produtos'),
          axios.get('/api/categorias')
        ]);
        setProdutos(prodRes.data);
        setCategorias(catRes.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [updateTrigger]);

  const handleProdutoChange = (e) => {
    const { name, value } = e.target;
    setFormProduto((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteProduto = async (id) => {
    try {
      await axios.delete(`/api/produtos/${id}`);
      setProdutos(produtos.filter(p => p.id !== id));
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleCategoriaChange = (e) => {
    setNovaCategoria(e.target.value);
  };

  const handleProdutoSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoProduto = {
        nome: formProduto.nome,
        preco: formProduto.preco,
        categoria: { id: formProduto.categoriaId }
      };
      const res = await axios.post('/api/produtos', novoProduto);
      setProdutos([...produtos, res.data]);
      setFormProduto({ nome: '', preco: '', categoriaId: '' });
      setUpdateTrigger(!updateTrigger);
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };

  const handleNovaCategoriaSubmit = async (e) => {
    e.preventDefault();
    if (!novaCategoria.trim()) return;

    try {
      const res = await axios.post('/api/categorias', { nome: novaCategoria });
      setCategorias([...categorias, res.data]);
      setNovaCategoria('');
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
    }
  };

  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <h1>Gerenciador de Produtos</h1>
      </header>

      {/* Formulário de Categoria */}
      <section className="section">
        <h2>Adicionar Categoria</h2>
        <form onSubmit={handleNovaCategoriaSubmit} className="form">
          <input
            type="text"
            placeholder="Nome da categoria"
            value={novaCategoria}
            onChange={handleCategoriaChange}
            required
          />
          <button type="submit">Salvar Categoria</button>
        </form>
      </section>

      {/* Formulário de Produto */}
      <section className="section">
        <h2>Adicionar Produto</h2>
        <form onSubmit={handleProdutoSubmit} className="form">
          <input
            type="text"
            name="nome"
            placeholder="Nome do produto"
            value={formProduto.nome}
            onChange={handleProdutoChange}
            required
          />
          <input
            type="number"
            name="preco"
            placeholder="Preço"
            value={formProduto.preco}
            onChange={handleProdutoChange}
            required
          />
          <select
            name="categoriaId"
            value={formProduto.categoriaId}
            onChange={handleProdutoChange}
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.nome}</option>
            ))}
          </select>
          <button type="submit">Salvar Produto</button>
        </form>
      </section>

      {/* Lista de Produtos */}
      <section className="section">
        <h2>Produtos Cadastrados</h2>
        <div className="product-grid">
          {produtos.map((p) => (
            <div key={p.id} className="product-card">
              <h3>{p.nome}</h3>
              <p><strong>Preço:</strong> R$ {parseFloat(p.preco).toFixed(2)}</p>
              <p><strong>Categoria:</strong> {p.categoria?.nome || 'Sem categoria'}</p>
              <button
                onClick={() => handleDeleteProduto(p.id)}
                className="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
