function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="#catalogo" className="brand">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/224/224595.png"
            alt="Logo Biblioteca Viva"
          />

          <div className="brand-info">
            <span className="brand-title">
              Biblioteca Viva
            </span>

            <span className="brand-subtitle">
              Sua biblioteca digital
            </span>
          </div>
        </a>

        <nav className="nav">

          <a href="#catalogo">
            Catálogo
          </a>

          <a href="#filtros">
            Explorar
          </a>

          <a href="#sobre">
            Sobre
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Header;