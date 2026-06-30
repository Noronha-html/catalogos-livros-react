function getInitials(titulo) {
  return titulo
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function CardLivro({ livro, favorito, aoAlternarFavorito }) {
  const initials = getInitials(livro.titulo);

  const statusClass = `status status-${livro.status
    .toLowerCase()
    .replace(" ", "-")}`;

  return (
    <article className="card-livro">

      <div className="card-capa">

        <div className="card-capa-overlay">

          <span className="card-iniciais">
            {initials}
          </span>

        </div>

      </div>

      <div className="card-conteudo">

        <div className="card-topo">

          <span className="categoria">
            {livro.categoria}
          </span>

          <button
            className={`favorito ${favorito ? "ativo" : ""}`}
            onClick={() => aoAlternarFavorito(livro.id)}
            aria-label={
              favorito
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"
            }
          >
            {favorito ? "★" : "☆"}
          </button>

        </div>

        <h2 className="titulo-livro">
          {livro.titulo}
        </h2>

        <p className="autor">
          {livro.autor}
        </p>

        <div className="livro-infos">

          <span className="nota">
            ⭐ {livro.nota}
          </span>

          <span className="paginas">
            📄 {livro.paginas} páginas
          </span>

        </div>

        <p className={statusClass}>
          {livro.status}
        </p>

        <p className="descricao">
          {livro.descricao}
        </p>

        <div className="tags">

          {livro.tags.map((tag) => (

            <span
              key={tag}
              className="tag"
            >
              #{tag}
            </span>

          ))}

        </div>

      </div>

    </article>
  );
}

export default CardLivro;