import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openActivities = () => {
    window.location.href = `${import.meta.env.BASE_URL}atividades.html`;
  };

  return (
    <div className="site">
      {/* =========================
          HEADER
      ========================= */}
      <header className="header">
        <div className="header-content">
          <h1>Portfólio Acadêmico</h1>

          <p>3º B • Desenvolvimento de Sistemas</p>
        </div>

        {/* MENU HAMBÚRGUER */}
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU */}
        {menuOpen && (
          <nav className="menu">
            <button onClick={() => goTo("inicio")}>
              Início
            </button>

            <button onClick={() => goTo("quem-eu-sou")}>
              Quem eu sou
            </button>

            <button onClick={() => goTo("portfolio")}>
              O que é o portfólio
            </button>

            <button onClick={() => goTo("materias")}>
              Matérias
            </button>

            <button onClick={openActivities}>
              Atividades
            </button>

            <button onClick={() => goTo("contato")}>
              Contato
            </button>
          </nav>
        )}
      </header>

      {/* =========================
          CONTEÚDO PRINCIPAL
      ========================= */}
      <main className="main-content">

        {/* =========================
            INÍCIO
        ========================= */}
        <section id="inicio" className="profile-section">
          <div className="profile-card">

            <div className="profile-image-container">
              <img
                src="/profile.jpg"
                alt="Foto de perfil"
                className="profile-image"
              />
            </div>

            <div className="profile-info">

              <span className="section-label">
                PORTFÓLIO ACADÊMICO
              </span>

              <h2>
                Letícia Oliveira Sá
              </h2>

              <p className="profile-description">
                Estudante do Ensino Médio e do curso técnico em
                Desenvolvimento de Sistemas.
              </p>

              <div className="profile-data">

                <div>
                  <strong>Nº:</strong>
                  <span>19</span>
                </div>

                <div>
                  <strong>Turma:</strong>
                  <span>3º B</span>
                </div>

                <div>
                  <strong>Curso:</strong>
                  <span>
                    Desenvolvimento de Sistemas
                  </span>
                </div>

              </div>

              <button
                className="primary-button"
                onClick={openActivities}
              >
                Ver atividades

                <span>→</span>
              </button>

            </div>
          </div>
        </section>

        {/* =========================
            QUEM EU SOU
        ========================= */}
        <section
          id="quem-eu-sou"
          className="content-section"
        >
          <div className="content-card">

            <span className="section-label">
              SOBRE MIM
            </span>

            <h2>
              Quem eu sou
            </h2>

            <p>
              Meu nome é Letícia e este portfólio reúne
              parte da minha trajetória acadêmica durante
              o curso de Desenvolvimento de Sistemas.
            </p>

            <p>
              Aqui estão registrados projetos, atividades
              e aprendizados desenvolvidos ao longo do curso.
            </p>

          </div>
        </section>

        {/* =========================
            PORTFÓLIO
        ========================= */}
        <section
          id="portfolio"
          className="content-section"
        >
          <div className="content-card">

            <span className="section-label">
              SOBRE O SITE
            </span>

            <h2>
              O que é o portfólio
            </h2>

            <p>
              Este portfólio foi desenvolvido para organizar
              e apresentar minhas atividades acadêmicas,
              projetos e conhecimentos adquiridos durante
              o curso.
            </p>

            <p>
              A proposta é manter todos os registros
              organizados por semestre, bimestre, matéria,
              semana e atividade.
            </p>

          </div>
        </section>

        {/* =========================
            MATÉRIAS
        ========================= */}
        <section
          id="materias"
          className="content-section"
        >
          <div className="content-card">

            <span className="section-label">
              FORMAÇÃO
            </span>

            <h2>
              Matérias
            </h2>

            <div className="subjects-grid">

              <article className="subject-info">
                <h3>Front-End</h3>

                <p>
                  Desenvolvimento de interfaces e páginas
                  para aplicações web.
                </p>
              </article>

              <article className="subject-info">
                <h3>Back-End</h3>

                <p>
                  Desenvolvimento da lógica e funcionamento
                  interno das aplicações.
                </p>
              </article>

              <article className="subject-info">
                <h3>Banco de Dados</h3>

                <p>
                  Organização, armazenamento e gerenciamento
                  de dados.
                </p>
              </article>

              <article className="subject-info">
                <h3>Inteligência Artificial</h3>

                <p>
                  Conceitos e aplicações relacionadas à
                  inteligência artificial.
                </p>
              </article>

              <article className="subject-info">
                <h3>Mobile</h3>

                <p>
                  Desenvolvimento de aplicações e interfaces
                  para dispositivos móveis.
                </p>
              </article>

              <article className="subject-info">
                <h3>Versionamento</h3>

                <p>
                  Controle de versões, Git e GitHub aplicados
                  ao desenvolvimento.
                </p>
              </article>

              <article className="subject-info">
                <h3>Multidisciplinar</h3>

                <p>
                  Atividades que integram conhecimentos de
                  diferentes áreas do curso.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* =========================
            ATIVIDADES
        ========================= */}
        <section
          id="atividades"
          className="content-section"
        >
          <div className="content-card activities-card">

            <span className="section-label">
              REGISTROS
            </span>

            <h2>
              Minhas atividades
            </h2>

            <p>
              Acesse a página com todas as atividades
              organizadas por semestre, bimestre, matéria
              e semana.
            </p>

            <button
              className="primary-button link-button"
              onClick={openActivities}
            >
              Acessar atividades

              <span>→</span>
            </button>

          </div>
        </section>

        {/* =========================
            CONTATO
        ========================= */}
        <section
          id="contato"
          className="content-section"
        >
          <div className="content-card">

            <span className="section-label">
              CONTATO
            </span>

            <h2>
              Contato
            </h2>

            <p>
              Este espaço poderá reunir futuramente
              meus principais contatos e links profissionais.
            </p>

            <div className="contact-item">

              <strong>
                GitHub
              </strong>

              <a
                href="https://github.com/Letstar12"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Letstar12
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">

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