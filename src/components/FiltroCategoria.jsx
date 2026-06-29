function FiltroCategoria({ categorias, valor, aoAlterar }) {
  return (
    <div className="filtro-card">

      <div className="filtro-header">

        <span className="filtro-icone">
          📚
        </span>

        <div>

          <label
            htmlFor="categoria"
            className="filtro-titulo"
          >
            Categoria
          </label>

          <span className="filtro-descricao">
            Escolha um gênero
          </span>

        </div>

      </div>

      <select
        id="categoria"
        className="filtro-select"
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
      >
        <option value="Todas">
          Todas as categorias
        </option>

        {categorias.map((categoria) => (
          <option
            key={categoria}
            value={categoria}
          >
            {categoria}
          </option>
        ))}

      </select>

    </div>
  );
}

export default FiltroCategoria;