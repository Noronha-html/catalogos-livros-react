function FiltroStatus({ valor, aoAlterar }) {
  return (
    <div className="filtro-card">

      <div className="filtro-header">

        <span className="filtro-icone">
          📖
        </span>

        <div>

          <label
            htmlFor="status"
            className="filtro-titulo"
          >
            Status da leitura
          </label>

          <span className="filtro-descricao">
            Filtre pelo progresso
          </span>

        </div>

      </div>

      <select
        id="status"
        className="filtro-select"
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
      >
        <option value="Todos">
          Todos os status
        </option>

        <option value="Lido">
          📗 Lido
        </option>

        <option value="Lendo">
          📘 Lendo
        </option>

        <option value="Quero ler">
          📕 Quero ler
        </option>

      </select>

    </div>
  );
}

export default FiltroStatus;