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
import LifeCycleA from './components/LifeCycleMethods/LifeCycleA';
import LifeCycleC from './components/LifeCycleMethods/LifeCycleC';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import CallbackRef from './components/CallbackRef';
import FocusInput from './components/FocusInput';
import ForwardRefParent from './components/ForwardRefParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import KeyPressCounter from './components/KeyPressCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter1 from './components/Counter1';
// import MemoComp from './components/MemoComp';


function App() {
  return (
    <div className="App">
      {/* <FunctionComp />
      <Greet heroName="superman" />
      <ClassComp name="Ram Sita" />
      <Message />
      <PropsEg />
      <Counter />
      <MessageChange />
      <ParentComponent />
      <Condition />
      <ListRender />
      <StyleSheet primary={false} />
      <Inline />
      <h1 className={Styles.error}> Error </h1>
      <h1 className='success'> Success </h1>
      <FormHandler /> */}
      {/* <LifeCycleA />
      <LifeCycleC/> */}
      {/* <PureComp/> */}
      {/* <ParentComp/> */}
      {/* <MemoComp name="RamSita"/> */}
      {/* <RefsDemo/> */}
      {/* <CallbackRef/> */}
      {/* <FocusInput/>
      <ForwardRefParent/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
      <Hero heroName="superMan" /><br></br>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="batMan" /><br></br>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary> */}
     {/* <ClickCounter name="Hanuman" />
     <HoverCounter/>
     <KeyPressCounter/> */}


   {/* these components are also considered for rendering example */}
     {/* <ClickCounterTwo/>
     <HoverCounterTwo/>
     <User render={(isLoggedIn)=>isLoggedIn ? "Hanuman" : "Guest"}/> */}
      <Counter1 render={(count,incrementCount)=>
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
         <Counter1 render={(count,incrementCount)=>
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>}/>
    </div>
  );
}

export default App;
