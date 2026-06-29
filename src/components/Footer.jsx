function Footer() {
  return (
    <footer className="footer" id="sobre">
      <div className="footer-content">

        <div className="footer-brand">

          <img
            className="footer-logo"
            src="https://cdn-icons-png.flaticon.com/512/224/224595.png"
            alt="Biblioteca Viva"
          />

          <div>
            <h3>Biblioteca Viva</h3>

            <p className="footer-sub">
              Organize suas leituras, favorite seus livros e encontre novas histórias em um único lugar.
            </p>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <span className="footer-copy">
            © 2026 Biblioteca Viva
          </span>

          <span className="footer-made">
            Desenvolvido em React
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;