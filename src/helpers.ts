const ticksOptions = {
  "Unidad de fomento (UF)": "uf",
  "Libra de Cobre": "libra_cobre",
  "Tasa de desempleo": "tasa_desempleo",
  Euro: "euro",
  Imacec: "imacec",
  "Dólar observado": "dolar",
  "Tasa Política Monetaria (TPM)": "tpm",
  "Indice de valor promedio (IVP)": "ivp",
  "Indice de Precios al Consumidor (IPC)":"ipc",
  "Dólar acuerdo": "dolar_intercambio",
  "Unidad Tributaria Mensual (UTM)": "utm",
  Bitcoin:"bitcoin"
}

const startYears: { [key: string]: number; } = {
  uf: 1977,
  libra_cobre: 2012,
  tasa_desempleo: 2009,
  euro: 1999,
  imacec: 1997,
  dolar: 1984,
  tpm: 2001,
  ivp: 1990,
  ipc:1928,
  dolar_intercambio: 1998,
  utm: 1990,
  bitcoin: 2009
}

const yearsOptions = (tick: string) => {
  if (!tick) return {};
  const startYear: Number = startYears[tick];
  const currentYear = new Date().getFullYear()
  const years = Array.from({length: currentYear +1}, (_, index) => index >=startYear ? index:null).filter(item => item !== null);
  return Object.assign({}, years.map(year => `${year}`))
}

let monthsOptions = Object.assign({}, ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"])
const swapAndParse = Object.entries(monthsOptions).map(([key,value]) => {
  let newKey = +(key)+1;
  if (newKey < 10) return [value, `0${newKey}`]
  return [value, `${newKey}`]
})
monthsOptions = Object.fromEntries(swapAndParse)
export { ticksOptions, yearsOptions, monthsOptions }