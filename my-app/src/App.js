import './App.css';
import FunctionComp from './components/Welcome';
import ClassComp from './components/ClassComp';
import PropsEg from './components/PropsEg';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import MessageChange from './components/MessageChange';
import ParentComponent from './components/ParentComponent';
import Condition from './components/Condition';


function App() {
  return (
    <div className="App">
      <FunctionComp/>
      <Greet heroName="superman"/>
      <ClassComp name="Ram Sita"/>
      <Message/>
      <PropsEg/>
      <Counter/>
      <MessageChange/>
      <ParentComponent/>
      <Condition/>
    
    </div>
  );
}

export default App;
