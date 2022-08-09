import React from 'react';

interface SelectProps {
  options: object,
  label: string,
  value: string,
  useValueAsKey?: boolean,
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
}

const Select = (props: SelectProps) => {
  const {options, label, value, onChange, useValueAsKey, disabled} = props;
  return (
    <div className="flex flex-col text-left" >
    <label>{label}</label>
    
    <select 
      value={value} 
      className="border-slate-300 rounded border-2"
      onChange={onChange}
      disabled={disabled}
    >
      <option value={""}>
        Selecciona una opción
      </option>
      {
        Object.entries(options).map(([key,value]:string[]) => {
          return <option value={value} key={key}>{useValueAsKey ? value: key}</option>
        })
      }
    </select>
    </div>
  )
}

export default Select;