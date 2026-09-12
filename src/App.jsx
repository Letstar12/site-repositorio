import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseUrl = import.meta.env.BASE_URL;

  function goToActivities() {
    window.location.href = `${baseUrl}atividades.html`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">

        <div className="header-content">
          <h1>Portfólio Acadêmico</h1>
          <p>Desenvolvimento de Sistemas</p>
        </div>

        {/* BOTÃO MENU */}
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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


      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">

        {/* PERFIL */}
        <section id="inicio" className="content-card profile-card">

          <div className="profile-image-container">
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
        <section id="quem-sou" className="content-card">

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


        {/* O QUE É O PORTFÓLIO */}
        <section id="portfolio" className="content-card">

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
        <section id="materias" className="content-card">

          <span className="section-label">
            FORMAÇÃO
          </span>

          <h2>Matérias</h2>

          <div className="subjects-grid">

            <article className="subject-card">
              <h3>Front-End</h3>
              <p>
                Desenvolvimento de interfaces e páginas web,
                utilizando HTML, CSS, JavaScript e React.
              </p>
            </article>

            <article className="subject-card">
              <h3>Back-End</h3>
              <p>
                Desenvolvimento da lógica e funcionamento
                interno das aplicações.
              </p>
            </article>

            <article className="subject-card">
              <h3>Banco de Dados</h3>
              <p>
                Organização, criação e manipulação de dados
                utilizando bancos relacionais.
              </p>
            </article>

            <article className="subject-card">
              <h3>Inteligência Artificial</h3>
              <p>
                Estudo dos conceitos e aplicações da inteligência
                artificial no desenvolvimento de sistemas.
              </p>
            </article>

            <article className="subject-card">
              <h3>Mobile</h3>
              <p>
                Desenvolvimento de aplicações voltadas
                para dispositivos móveis.
              </p>
            </article>

            <article className="subject-card">
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
            <span>📎</span>
            Ver atividades
            <span>↗</span>
          </button>

        </section>


        {/* CONTATO */}
        <section id="contato" className="content-card">

          <span className="section-label">
            CONTATO
          </span>

          <h2>Contato</h2>

          <p>
            Este espaço pode ser utilizado para apresentar
            informações de contato e links profissionais.
          </p>

        </section>

      </main>


      {/* FOOTER */}
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