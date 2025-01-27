import React, { useState } from 'react';

type ParamType = 'string' | 'number' | 'select';

interface Param {
  id: number;
  name: string;
  type: ParamType;
  options?: string[];
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  id: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface InputProps {
  param: Param;
  currentValue: string;
  handleParamChange: (paramId: number, value: string) => void;
  type: ParamType;
}

const Input = ({ param, currentValue, handleParamChange, type }: InputProps) => {
  return (
    <input
      id={`param-${param.id}`}
      type={type}
      value={currentValue}
      onChange={(e) => handleParamChange(param.id, e.target.value)}
      style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }}
    />
  )
}

const Select = ({ param, currentValue, handleParamChange }: InputProps) => {
  return (
    <select
      id={`param-${param.id}`}
      value={currentValue}
      onChange={(e) => handleParamChange(param.id, e.target.value)}
      style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }}
    >
      <option value="">Выберите...</option>
      {param.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

const App: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);
  const handleParamChange = (paramId: number, value: string) => {
    setParamValues((prevValues) => prevValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    ));
  };

  const getModel = (): Model => {
    return {
      ...model,
      paramValues,
    };
  };
  
  const renderParamInput = (param: Param, currentValue: string) => {
    switch (param.type) {
      case 'string':
        return (
          <Input param={param} currentValue={currentValue} handleParamChange={handleParamChange} type={param.type} />
        );
      case 'number':
        return (
          <Input param={param} currentValue={currentValue} handleParamChange={handleParamChange} type={param.type} />
        );
      case 'select':
        return (
          <Select param={param} currentValue={currentValue} handleParamChange={handleParamChange} type={param.type} />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '16px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Редактор параметров</h1>
      <div style={{ display: 'grid', gap: '16px' }}>
        {params.map((param) => {
          const currentValue = paramValues.find((pv) => pv.paramId === param.id)?.value || '';
          return (
            <div key={param.id} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <label htmlFor={`param-${param.id}`} style={{ width: '150px', fontWeight: '500' }}>
                {param.name}
              </label>
              {renderParamInput(param, currentValue)}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => console.log(getModel())}
        style={{ fontWeight: 'bold', textTransform: 'uppercase', marginTop: '16px', padding: '10px 20px', backgroundColor: '#00a6e7', color: '#fff', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
      >
        вывести модель в консоль
      </button>
    </div>
  );
};
export default App;
