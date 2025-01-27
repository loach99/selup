import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App params={[{
      id: 1,
      name: "Назначение",
      type: 'string'
    },
    {
      id: 2,
      name: "Длина",
      type: 'string'
    },
    {
      id: 3,
      name: "Продукты",
      type: 'select',
      options: ["сыр", "колбаса"]
    },
    {
      id: 4,
      name: "Вес",
      type: 'number'
    }
    ]} model={{
      paramValues: [{
        paramId: 1,
        value: "повседневное"
      },
      {
        paramId: 2,
        value: "макси"
      },
      {
        paramId: 3,
        value: "сыр"
      },
      {
        paramId: 4,
        value: "1"
      }
      ], colors: [{
        id: 1,
        value: "red"
      },
      {
        id: 2,
        value: "blue"
      },
      {
        id: 3,
        value: "green"
      },
      {
        id: 4,
        value: "yellow"
      }]
    }} />
  </React.StrictMode>
);
