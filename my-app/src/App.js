import './App.css';
import FunctionComp from './components/Welcome';
import ClassComp from './components/ClassComp';
import PropsEg from './components/PropsEg';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <FunctionComp/>
      <Greet heroName="superman"/>
      <ClassComp name="Ram Sita"/>
      <Message/>
      <PropsEg/>
      <Counter/>
    </div>
  );
}

export default App;
