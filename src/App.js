import logo from './logo.svg';
import './App.scss';
import { Card, DatePicker, Alert } from 'antd';

function App() {
  const date_test = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className="App">
      <h2>Componentes Ant Design</h2>
      <label>Ingenieria de Software II</label>
      <div>
        <Alert message='Success text' type='success' />
        <Alert message='Info text' type='info' />
        <Alert message='Warning text' type='warning' />
        <Alert message='Error text' type='error' />
      </div>
      <label>Seleccione una fecha</label>
      <DatePicker on onChange={date_test}></DatePicker>
      <div>
        <Card
          size='small'
          title='Tarjeta de presentacion'
          extra={<a href="#">Ver mas</a>}
          style={{ width:300 }}>
            <p>Juan Felipe Herrera</p>
            <p>Estudiante Ingenieria de Sistemas</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
