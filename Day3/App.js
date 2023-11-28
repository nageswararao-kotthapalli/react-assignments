import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'employee_name',
      key: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'employee_salary',
      key: 'salary',
    },
    {
      title: 'Age',
      dataIndex: 'employee_age',
      key: 'age',
    },
  ];

  useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => setData(response.data));

  }, []);
  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
