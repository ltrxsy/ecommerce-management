import logo from './logo.svg';
import './App.less';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import LoginForm from './components/login/login';
function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
