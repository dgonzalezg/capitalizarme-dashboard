const API_URL = "https://mindicador.cl/api";

const getDataByYear = async (tick: string, year: string) => {
  return (await fetch(`${API_URL}/${tick}/${year}`)).json();
};

export { getDataByYear };
