const PORTFOLIO_DATA_URL =
  "https://letstar12.github.io/site-repositorio/portfolio-data.json";

export async function getPortfolioData() {
  const response = await fetch(PORTFOLIO_DATA_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      "Não foi possível carregar os dados do portfólio."
    );
  }

  return response.json();
}