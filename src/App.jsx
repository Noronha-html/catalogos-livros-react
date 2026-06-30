import { useState, useEffect, useMemo } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PainelEstatisticas from "./components/PainelEstatisticas";
import CampoBusca from "./components/CampoBusca";
import FiltroCategoria from "./components/FiltroCategoria";
import FiltroStatus from "./components/FiltroStatus";
import ListaLivros from "./components/ListaLivros";

import livrosBase from "./data/livros.json";

function App() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [statusAtivo, setStatusAtivo] = useState("Todos");

  const [favoritos, setFavoritos] = useState(() => {
    try {
      const favoritosSalvos = localStorage.getItem(
        "biblioteca-viva:favoritos"
      );
      return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "biblioteca-viva:favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  const categorias = useMemo(() => {
    const categoriasUnicas = livrosBase.map((livro) => livro.categoria);
    return [...new Set(categoriasUnicas)].sort();
  }, []);

  const livrosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return livrosBase.filter((livro) => {
      const textoPesquisavel = [
        livro.titulo,
        livro.autor,
        livro.categoria,
        ...livro.tags,
      ]
        .join(" ")
        .toLowerCase();

      const combinaComBusca = textoPesquisavel.includes(termo);

      const combinaComCategoria =
        categoriaAtiva === "Todas" ||
        livro.categoria === categoriaAtiva;

      const combinaComStatus =
        statusAtivo === "Todos" ||
        livro.status === statusAtivo;

      return (
        combinaComBusca &&
        combinaComCategoria &&
        combinaComStatus
      );
    });
  }, [busca, categoriaAtiva, statusAtivo]);

  function alternarFavorito(idLivro) {
    setFavoritos((favoritosAtuais) => {
      if (favoritosAtuais.includes(idLivro)) {
        return favoritosAtuais.filter((id) => id !== idLivro);
      }

      return [...favoritosAtuais, idLivro];
    });
  }

  return (
    <>
      <Header />

      <main>

        <section className="hero">

          <div className="hero-left">

            <span className="hero-badge">
              Biblioteca Digital
            </span>

            <h1>
              Descubra mundos incríveis através da leitura.
            </h1>

            <p>
              Explore aventuras, fantasia, ficção científica e muitos
              outros universos. Organize sua coleção, favorite seus
              livros preferidos e encontre facilmente sua próxima
              leitura.
            </p>

            <CampoBusca
              valor={busca}
              aoAlterar={setBusca}
            />

          </div>

          <div className="hero-right">

            <div className="hero-card">

              <PainelEstatisticas
                total={livrosBase.length}
                exibidos={livrosFiltrados.length}
                favoritos={favoritos.length}
                categorias={categorias.length}
              />

            </div>

          </div>

        </section>

        <section
          className="dashboard"
          id="filtros"
        >

          <div className="dashboard-left">

            <div className="filtros">

              <FiltroCategoria
                categorias={categorias}
                valor={categoriaAtiva}
                aoAlterar={setCategoriaAtiva}
              />

              <FiltroStatus
                valor={statusAtivo}
                aoAlterar={setStatusAtivo}
              />

            </div>

          </div>

        </section>

        <section
          className="catalogo"
          id="catalogo"
        >

          <div className="secao-titulo">

            <div>

              <h2>Catálogo</h2>

              <span>
                Explore todos os livros disponíveis.
              </span>

            </div>

            <span>
              {livrosFiltrados.length} livro
              {livrosFiltrados.length !== 1 && "s"} encontrado
              {livrosFiltrados.length !== 1 && "s"}
            </span>

          </div>

          <ListaLivros
            livros={livrosFiltrados}
            favoritos={favoritos}
            aoAlternarFavorito={alternarFavorito}
          />

        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;