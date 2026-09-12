import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme } from "./theme";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  function goToActivities() {
    const activitiesUrl = import.meta.env.DEV
      ? "/atividades.html"
      : `${baseUrl}atividades.html`;

    window.location.href = activitiesUrl;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site">

      {/* HEADER */}
      <header className={`header ${menuOpen ? "menu-open" : ""}`}>

        <div className="header-glow"></div>

        <div className="header-content">
          <h1>Portfólio Acadêmico</h1>
          <p>Desenvolvimento de Sistemas</p>
        </div>

        {/* CONTROLES */}
        <div className="header-controls">

          {/* BOTÃO DE TEMA */}
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Ativar modo escuro"
                : "Ativar modo claro"
            }
            title={
              theme === "light"
                ? "Modo escuro"
                : "Modo claro"
            }
          >
            <span className="theme-icon">
              {theme === "light" ? "☾" : "☀"}
            </span>
          </button>

          {/* BOTÃO MENU */}
          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        {/* MENU */}
        {menuOpen && (
          <nav className="menu">

            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>

            <a href="#quem-sou" onClick={closeMenu}>
              Quem eu sou
            </a>

            <a href="#portfolio" onClick={closeMenu}>
              O que é o portfólio
            </a>

            <a href="#materias" onClick={closeMenu}>
              Matérias
            </a>

            <button
              onClick={() => {
                closeMenu();
                goToActivities();
              }}
            >
              Atividades
            </button>

            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>

          </nav>
        )}

      </header>


      {/* CONTEÚDO */}
      <main className="main-content">

        {/* PERFIL */}
        <section
          id="inicio"
          className="content-card profile-card"
        >

          <div className="card-shine"></div>

          <div className="profile-image-container">
            <div className="profile-image-ring"></div>

            <img
              src={`${baseUrl}profile.jpg`}
              alt="Foto de perfil"
              className="profile-image"
            />
          </div>

          <div className="profile-info">

            <span className="section-label">
              PERFIL ACADÊMICO
            </span>

            <h2>Letícia Oliveira Sá</h2>

            <p className="profile-description">
              Estudante do Ensino Médio e do curso técnico
              em Desenvolvimento de Sistemas.
            </p>

            <div className="profile-details">

              <div>
                <strong>Turma:</strong>
                <span>3º B</span>
              </div>

              <div>
                <strong>Número:</strong>
                <span>19</span>
              </div>

              <div>
                <strong>Curso:</strong>
                <span>Desenvolvimento de Sistemas</span>
              </div>

            </div>

          </div>

        </section>


        {/* QUEM EU SOU */}
        <section
          id="quem-sou"
          className="content-card"
        >

          <div className="card-shine"></div>

          <span className="section-label">
            SOBRE MIM
          </span>

          <h2>Quem eu sou</h2>

          <p>
            Sou estudante do 3º ano do Ensino Médio e do curso
            técnico em Desenvolvimento de Sistemas.
          </p>

          <p>
            Este espaço reúne minha trajetória acadêmica,
            atividades desenvolvidas e conhecimentos adquiridos
            durante minha formação.
          </p>

        </section>


        {/* PORTFÓLIO */}
        <section
          id="portfolio"
          className="content-card"
        >

          <div className="card-shine"></div>

          <span className="section-label">
            PORTFÓLIO
          </span>

          <h2>O que é este portfólio?</h2>

          <p>
            Este portfólio foi criado para registrar e organizar
            minha evolução durante o curso de Desenvolvimento
            de Sistemas.
          </p>

          <p>
            Aqui estão reunidas atividades, projetos e registros
            produzidos ao longo dos períodos letivos.
          </p>

        </section>


        {/* MATÉRIAS */}
        <section
          id="materias"
          className="content-card"
        >

          <div className="card-shine"></div>

          <span className="section-label">
            FORMAÇÃO
          </span>

          <h2>Matérias</h2>

          <div className="subjects-grid">

            <article className="subject-card">
              <div className="subject-glow"></div>

              <h3>Front-End</h3>

              <p>
                Desenvolvimento de interfaces e páginas web,
                utilizando HTML, CSS, JavaScript e React.
              </p>
            </article>


            <article className="subject-card">
              <div className="subject-glow"></div>

              <h3>Back-End</h3>

              <p>
                Desenvolvimento da lógica e funcionamento
                interno das aplicações.
              </p>
            </article>


            <article className="subject-card">
              <div className="subject-glow"></div>

              <h3>Banco de Dados</h3>

              <p>
                Organização, criação e manipulação de dados
                utilizando bancos relacionais.
              </p>
            </article>


            <article className="subject-card">
              <div className="subject-glow"></div>

              <h3>Inteligência Artificial</h3>

              <p>
                Estudo dos conceitos e aplicações da inteligência
                artificial no desenvolvimento de sistemas.
              </p>
            </article>


            <article className="subject-card">
              <div className="subject-glow"></div>

              <h3>Mobile</h3>

              <p>
                Desenvolvimento de aplicações voltadas
                para dispositivos móveis.
              </p>
            </article>


            <article className="subject-card">
              <div className="subject-glow"></div>

              <h3>Versionamento</h3>

              <p>
                Controle de versões, Git, GitHub e organização
                de projetos.
              </p>
            </article>

          </div>

        </section>


        {/* ATIVIDADES */}
        <section className="content-card activities-preview">

          <div className="card-shine"></div>

          <span className="section-label">
            REGISTROS ACADÊMICOS
          </span>

          <h2>Minhas atividades</h2>

          <p>
            Acesse a página com todas as atividades organizadas
            por semestre, bimestre, matéria e semana.
          </p>

          <button
            className="activities-button"
            onClick={goToActivities}
          >
            <span className="button-icon">📎</span>

            <span>Ver atividades</span>

            <span className="button-arrow">↗</span>
          </button>

        </section>


        {/* CONTATO */}
        <section
          id="contato"
          className="content-card"
        >

          <div className="card-shine"></div>

          <span className="section-label">
            CONTATO
          </span>

          <h2>Contato</h2>

          <p>
            Confira meus perfis profissionais e acompanhe
            meus projetos e experiências na área de tecnologia.
          </p>

          <div className="contact-links">

            <a
              href="https://github.com/Letstar12"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                GH
              </span>

              <span className="contact-info">
                <strong>GitHub</strong>
                <small>
                  github.com/Letstar12
                </small>
              </span>

              <span className="contact-arrow">
                ↗
              </span>
            </a>


            <a
              href="https://www.linkedin.com/in/letícia-oliveira-sá-0a09b0378/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                in
              </span>

              <span className="contact-info">
                <strong>LinkedIn</strong>
                <small>
                  Perfil profissional
                </small>
              </span>

              <span className="contact-arrow">
                ↗
              </span>
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-glow"></div>

        <p>
          Portfólio Acadêmico • Desenvolvimento de Sistemas
        </p>

        <span>
          © 2026
        </span>

      </footer>

    </div>
  );
}

export default App;