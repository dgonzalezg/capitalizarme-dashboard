import React from 'react';
import Plot from 'react-plotly.js';

export interface serieType {
  fecha: string,
  valor: number
}
interface ChartProps {
  name: string,
  monthly: boolean,
  serie: serieType[],
  type: string,
  year: string,
  month?: string,
  monthName?: string,
  error?: boolean
}

const Chart = (props: ChartProps) => {
  const {name, monthly, serie, type, year, month, monthName} = props;
  const filteredSerie = month ? serie.filter(item => {
    const date = new Date(item.fecha)
    return date.getMonth() + 1 === +month 
  }) : serie
  const title = name + (monthly ? '': ` de ${monthName}`) + ` de ${year}`
  const x = filteredSerie.map(item => item.fecha)
  const y = filteredSerie.map(item => item.valor)
  if (!(filteredSerie.length)) return <p>No hay datos</p>
  if ((!monthly && !month) || !year) return null;
  return (
      <Plot
      data={[
        {
          x,
          y,
          type: 'scatter',
          mode: 'lines',
          marker: {color: 'blue'},
        },
      ]}
      config={{responsive: true}}
      layout={ {width: 750, height: 450, title: title, yaxis: {
        title: `Valor en ${type}`
      } } }
    />

    
  );
}

export default Chart;