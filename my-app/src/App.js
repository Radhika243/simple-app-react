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
import ComponentC from './context/ComponentC';
import { UserProvider } from './context/userContext';
import PostList from './http-components/PostList';
import AddList from './http-components/AddList';
import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import HookCounterThree from './hooks/HookCounterThree';
import HookCounterArray from './hooks/HookCounterArray';
import UseEffectOne from './hooks/UseEffectOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './hooks/HookMouse';
import MouseContainer from './hooks/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './hooks/IntervalHookCounter';
import DataFetching from './hooks/DataFetching';
import DataFetchingOnButtonClick from './hooks/DataFetchingOnButtonClick';
import React,{useReducer} from 'react';
import ComponentCO from './hooks/ComponentCO';
import Counter2 from './hooks/UseReducerHook/Counter2';
import Counter3 from './hooks/UseReducerHook/Counter3';
import Counter4 from './hooks/UseReducerHook/Counter4';
import Counter5 from './hooks/UseReducerHook/Counter5';
import ComponentA from './useReducer/ComponentA';
import ComponentB from './useReducer/ComponentB';
import ComponentCOO from './useReducer/ComponentCOO';

// import MemoComp from './components/MemoComp';

export const UserContext1 = React.createContext()
export const Channelcontext1 = React.createContext()

export const CountContext = React.createContext()

const initialState = 0;
//2nd step
//action ---> instruction to reducer function, based on the action specified the reducer function performs necessary state transactions
const reducer = (currentState,action) =>{
    //return newState
    switch(action){
        case 'increment':
            return currentState + 1;
           
        case 'decrement':
            return currentState - 1;
           
        case 'reset':
            return initialState;
       
        default:
            return currentState
    }

}



function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
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
      {/* <Counter1 render={(count,incrementCount)=>
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
         <Counter1 render={(count,incrementCount)=>
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>}/> */}

        {/* Provider component is responsible for providing the value to descendent component 
        We provided the Value in Component C(nested inside) that can be consumed by the component F*/}
        {/* <UserProvider value="Ram">
          <ComponentC/>
        </UserProvider> */}

        {/* <PostList/>
        <AddList/> */}
        {/* <HookCounter/>
        <br></br>
        <HookCounterTwo/>

        <br/>
        <HookCounterThree/>
        <br>
        </br>
        <HookCounterArray/> */}


        {/* <UseEffectOne/>

        <br></br>
        <ClassMouse/> 
         <HookMouse/> 
         <MouseContainer/>
        <IntervalClassCounter/>
        <IntervalHookCounter/>
        <DataFetching/>
        <DataFetchingOnButtonClick/> */}

        <br />
        {/* <UserContext1.Provider value={'Ram Sita'}>
          <Channelcontext1.Provider value={'Hanuman'}>
          <ComponentCO />
          </Channelcontext1.Provider>
        </UserContext1.Provider> */}

        {/* <Counter2/>
        <Counter3/>
        <Counter4/>
        <Counter5/> */}

        <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
          <div className="App">
            Count = {count}
              <ComponentA/>
              <ComponentB/>
              <ComponentCOO/>
          </div>
        </CountContext.Provider>
  

        

       </div>
  );
}

export default App;
