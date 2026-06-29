function CampoBusca({ valor, aoAlterar }) {
  return (
    <div className="campo-busca">

      <label htmlFor="busca" className="campo-label">
        Encontre seu próximo livro
      </label>

      <div className="campo-input">

        <span className="campo-icone">
          🔍
        </span>

        <input
          id="busca"
          type="search"
          value={valor}
          onChange={(e) => aoAlterar(e.target.value)}
          placeholder="Pesquisar por título, autor, categoria ou tag..."
        />

        <span className="campo-atalho">
          Ctrl + K
        </span>

      </div>

      <span className="campo-ajuda">
        Você pode pesquisar por título, autor, categoria ou qualquer tag do livro.
      </span>

    </div>
  );
}

export default CampoBusca;