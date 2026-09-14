function Tcc() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="site tcc-site">

      {/* BOTÃO VOLTAR */}
      <div className="tcc-button-area">
        <a
          href={baseUrl}
          className="tcc-back-button"
        >
          <span className="back-arrow">←</span>
          <span>Voltar</span>
        </a>
      </div>


      {/* CONTEÚDO */}
      <main className="tcc-page">

        {/* IDENTIFICAÇÃO */}
        <section className="content-card tcc-intro">

          <div className="card-shine"></div>

          <span className="section-label">
            PROJETO HELP LIFE
          </span>

          <h1>Help Life</h1>

          <p className="tcc-subtitle">
            TCC • Desenvolvimento de Sistemas
          </p>

        </section>


        {/* O QUE É O HELP LIFE */}
        <section className="content-card">

          <div className="card-shine"></div>

          <span className="section-label">
            SOBRE O PROJETO
          </span>

          <h2>O que é o Help Life?</h2>

          <p>
            O Help Life é um projeto desenvolvido como Trabalho de
            Conclusão de Curso no curso técnico em Desenvolvimento
            de Sistemas.
          </p>

          <p>
            O projeto tem como proposta oferecer informações e recursos
            relacionados à saúde mental, reunindo conteúdos, orientações
            e formas de buscar ajuda em um único espaço.
          </p>

        </section>


        {/* SOBRE O TCC */}
        <section className="content-card">

          <div className="card-shine"></div>

          <span className="section-label">
            TRABALHO DE CONCLUSÃO DE CURSO
          </span>

          <h2>Sobre o TCC</h2>

          <p>
            O Help Life foi desenvolvido durante a formação técnica em
            Desenvolvimento de Sistemas, reunindo conhecimentos
            adquiridos ao longo do curso para a criação de uma solução
            voltada à saúde mental.
          </p>

          <p>
            Esta página reúne os principais links do projeto, permitindo
            acessar o site, o código-fonte e a documentação do TCC.
          </p>

        </section>


        {/* LINKS */}
        <section className="content-card">

          <div className="card-shine"></div>

          <span className="section-label">
            LINKS DO PROJETO
          </span>

          <h2>Acesse o Help Life</h2>

          <div className="tcc-links">

            {/* SITE */}
            <a
              href="https://lvz05.github.io/TCC/"
              target="_blank"
              rel="noreferrer"
              className="tcc-link"
            >
              <span className="tcc-link-icon">
                🌐
              </span>

              <span className="tcc-link-info">
                <strong>Visitar Site</strong>

                <small>
                  Acesse o site do Help Life
                </small>
              </span>

              <span className="tcc-link-arrow">
                ↗
              </span>
            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/Lvz05/TCC"
              target="_blank"
              rel="noreferrer"
              className="tcc-link"
            >
              <span className="tcc-link-icon">
                GH
              </span>

              <span className="tcc-link-info">
                <strong>Projeto no GitHub</strong>

                <small>
                  Código e desenvolvimento do projeto
                </small>
              </span>

              <span className="tcc-link-arrow">
                ↗
              </span>
            </a>


            {/* DOCUMENTAÇÃO */}
            <a
              href="https://docs.google.com/document/d/1DVYJUxNpEQHOb4l80NzytZCS_jYB9Fgli6ClfXycYM0/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="tcc-link"
            >
              <span className="tcc-link-icon">
                📄
              </span>

              <span className="tcc-link-info">
                <strong>Documentação do TCC</strong>

                <small>
                  Documentação atualizada do projeto
                </small>
              </span>

              <span className="tcc-link-arrow">
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

export default Tcc;