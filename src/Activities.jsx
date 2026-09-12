import { useEffect, useState } from "react";
import { getPortfolioData } from "./services/portfolio";
import { applyTheme, getInitialTheme } from "./theme";

function Activities() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    async function loadActivities() {
      try {
        const data = await getPortfolioData();

        setPortfolio(data);
      } catch (err) {
        console.error(err);

        setError(
          "Não foi possível carregar as atividades."
        );
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light"
        ? "dark"
        : "light"
    );
  }

  function organizeFiles(files) {
    const structure = {};

    files.forEach((file) => {
      const parts = file.path.split("/");

      const semestre = parts[0] || "Outros";
      const bimestre = parts[1] || "Outros";
      const materia = parts[2] || "Outros";
      const semana = parts[3] || "Outros";

      if (!structure[semestre]) {
        structure[semestre] = {};
      }

      if (!structure[semestre][bimestre]) {
        structure[semestre][bimestre] = {};
      }

      if (!structure[semestre][bimestre][materia]) {
        structure[semestre][bimestre][materia] = {};
      }

      if (
        !structure[semestre][bimestre][materia][semana]
      ) {
        structure[semestre][bimestre][materia][semana] = [];
      }

      structure[semestre][bimestre][materia][semana].push(
        file
      );
    });

    return structure;
  }

  const organizedActivities = portfolio?.files
    ? organizeFiles(portfolio.files)
    : {};

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">

        <div className="header-glow"></div>

        <div className="header-content">
          <h1>Atividades Acadêmicas</h1>

          <p>
            Portfólio • Desenvolvimento de Sistemas
          </p>
        </div>


        {/* CONTROLES */}
        <div className="header-controls">

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


          <a
            href={import.meta.env.BASE_URL}
            className="activities-back-button"
          >
            ← Voltar
          </a>

        </div>

      </header>


      {/* CONTEÚDO */}
      <main className="activities-page">

        <section className="content-card activities-intro">

          <div className="card-shine"></div>

          <span className="section-label">
            REGISTROS ACADÊMICOS
          </span>

          <h2>Minhas atividades</h2>

          <p>
            Aqui estão organizadas as atividades desenvolvidas
            durante o curso de Desenvolvimento de Sistemas.
          </p>

          <p>
            Os registros estão separados por semestre,
            bimestre, matéria e semana.
          </p>

        </section>


        {loading && (
          <div className="github-status">
            <p>
              Carregando atividades...
            </p>
          </div>
        )}


        {!loading && error && (
          <div className="github-status error">
            <p>{error}</p>
          </div>
        )}


        {!loading && !error && portfolio && (
          <div className="organized-activities">

            {Object.entries(organizedActivities).map(
              ([semestre, bimestres]) => (

                <section
                  className="semester-block"
                  key={semestre}
                >

                  <div className="semester-title">

                    <span className="section-label">
                      PERÍODO
                    </span>

                    <h2>{semestre}</h2>

                  </div>


                  {Object.entries(bimestres).map(
                    ([bimestre, materias]) => (

                      <div
                        className="bimestre-block"
                        key={bimestre}
                      >

                        <div className="bimestre-title">

                          <span className="activity-label">
                            PERÍODO LETIVO
                          </span>

                          <h3>{bimestre}</h3>

                        </div>


                        <div className="activity-subjects">

                          {Object.entries(materias).map(
                            ([materia, semanas]) => (

                              <article
                                className="activity-subject-card"
                                key={materia}
                              >

                                <div className="subject-icon">
                                  📁
                                </div>


                                <div className="subject-content">

                                  <span className="activity-label">
                                    DISCIPLINA
                                  </span>

                                  <h3>{materia}</h3>


                                  <div className="weeks-container">

                                    {Object.entries(
                                      semanas
                                    ).map(
                                      ([semana, files]) => (

                                        <div
                                          className="week-block"
                                          key={semana}
                                        >

                                          <div className="week-title">
                                            {semana}
                                          </div>


                                          <div className="subject-files">

                                            {files.map(
                                              (
                                                file,
                                                index
                                              ) => (

                                                <a
                                                  key={
                                                    file.path
                                                  }
                                                  href={
                                                    file.url
                                                  }
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="file-link"
                                                >

                                                  <span className="file-icon">
                                                    📎
                                                  </span>

                                                  <span className="file-name">
                                                    Atividade{" "}
                                                    {index + 1}
                                                  </span>

                                                  <span className="file-arrow">
                                                    ↗
                                                  </span>

                                                </a>

                                              )
                                            )}

                                          </div>

                                        </div>

                                      )
                                    )}

                                  </div>

                                </div>

                              </article>

                            )
                          )}

                        </div>

                      </div>

                    )
                  )}

                </section>

              )
            )}

          </div>
        )}

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

export default Activities;