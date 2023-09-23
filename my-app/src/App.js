import './App.css';
import FunctionComp from './Welcome';
import ClassComp from './ClassComp';
import PropsEg from './PropsEg';
import Greet from './Greet';

function App() {
  return (
    <div className="App">
      <FunctionComp/>
      <Greet heroName="superman"/>
      <ClassComp name="Ram Sita"/>
      <PropsEg/>
    </div>
  );
}

export default App;
