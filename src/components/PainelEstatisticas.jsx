function PainelEstatisticas({ total, exibidos, favoritos, categorias }) {
  const stats = [
    {
      label: "Total de Livros",
      valor: total,
      icone: "📚",
      destaque: "Acervo completo",
    },
    {
      label: "Exibidos",
      valor: exibidos,
      icone: "🔍",
      destaque: "Resultados atuais",
    },
    {
      label: "Favoritos",
      valor: favoritos,
      icone: "⭐",
      destaque: "Livros salvos",
    },
    {
      label: "Categorias",
      valor: categorias,
      icone: "🏷️",
      destaque: "Gêneros disponíveis",
    },
  ];

  return (
    <section
      className="painel-estatisticas"
      aria-label="Estatísticas da biblioteca"
    >
      {stats.map((item) => (
        <article
          key={item.label}
          className="card-estatistica"
        >
          <div className="card-estatistica-topo">

            <span className="card-icone">
              {item.icone}
            </span>

            <span className="card-titulo">
              {item.label}
            </span>

          </div>

          <div className="card-numero">
            {item.valor}
          </div>

          <div className="card-info">
            {item.destaque}
          </div>
        </article>
      ))}
    </section>
  );
}

export default PainelEstatisticas;