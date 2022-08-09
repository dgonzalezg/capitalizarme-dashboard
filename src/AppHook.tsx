import React, {useState, useEffect} from 'react';
import {getDataByYear} from './api/index';
import {serieType} from './components/Chart';
import { yearsOptions } from './helpers';

interface data {
  nombre: string,
  unidad_medida: string,
  serie: serieType[]
}
const AppHook = () => {
  const [tick, setTick] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [data, setData] = useState({} as data);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (tick && year) {
      setLoading(true)
      getDataByYear(tick, year).then(response => {
        if (response.error) {
          setError(true)
          return;
        }
        setData(response)
        setLoading(false)
      }).catch(() => {
        setError(true)
        setLoading(false)
      })
    } 
  }, [tick, year])
  const handleTickChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTick = (event.target as HTMLSelectElement).value
    if (year && !(Object.entries(yearsOptions(newTick)).map(([_, year]) => `${year}`).includes(year))){
      setYear("")
    };
    
    setTick(newTick)
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = (event.target as HTMLSelectElement).value
    setYear(newYear)
  }

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = (event.target as HTMLSelectElement).value
    setMonth(newMonth)
  }
   return {handleTickChange, tick, year, handleYearChange, month, handleMonthChange, data, loading, error}
}

export default AppHook;