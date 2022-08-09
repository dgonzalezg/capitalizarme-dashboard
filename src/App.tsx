import React from 'react';
import './App.css';
import Select from './components/Select';
import { ticksOptions, yearsOptions, monthsOptions } from './helpers';
import AppHook from './AppHook';
import Chart from './components/Chart';
import { Oval } from  'react-loader-spinner';

const monthlyTicks = ["tasa_desempleo", "imacec", "ipc", "utm"]

function App() {
  const {handleTickChange, tick, year, handleYearChange, month, handleMonthChange, data, loading, error} = AppHook();
  const {nombre, serie, unidad_medida} = data;
  const monthly = monthlyTicks.includes(tick)
  return (
    <div className="App">
      <header className="bg-white shadow px-6 pt-3 pb-6 flex flex-row space-x-6 mb-5">
        <Select options={ticksOptions} label="Indicador" value={tick} onChange={handleTickChange}/>
        <Select options={yearsOptions(tick)} label="Año" value={year} onChange={handleYearChange} useValueAsKey/>
        <Select options={monthsOptions} label="Mes" value={month} onChange={handleMonthChange} disabled={monthly}/>
      </header>
      {
      loading ?
      <div className="flex justify-center">
        <Oval color="#00BFFF" height={450} width={750}/>
      </div>
      
      :
      error ?
      <p>Ha ocurrido un error al consultar los datos</p> 
      :
      serie ? 
      (serie.length ?
          <Chart 
            name={nombre}
            monthly={monthly} 
            serie={serie} 
            type={unidad_medida} 
            year={year} 
            month={monthly ? '' : month}
            monthName={monthly ? '' : Object.keys(monthsOptions)[+month-1]}
            error={error} 
          />: 'No hay datos'
          )
          :null
      }
    </div>
  );
}

export default App;
