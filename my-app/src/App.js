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
import ListRender from './components/ListRender';
import StyleSheet from './components/styleSheet';
import Inline from './components/inline';
import Styles from './app.module.css'
import FormHandler from './components/FormHandler';

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
      <ListRender/>
      <StyleSheet primary = {false}/>
      <Inline/>
      <h1 className={Styles.error}> Error </h1>
      <h1 className='success'> Success </h1>
      <FormHandler/>
      
    </div>
  );
}

export default App;
