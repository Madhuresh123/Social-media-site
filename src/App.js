import './App.css';
import Feed from './Feed';
import Header from "./Header";
import Sidebar from './Sidebar';
// import Login from './Login';
// import {useSelector} from "react-redux";
// import { selectUser } from './features/userSlice';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {

  // const user = useSelector(selectUser)


  return (
    <Provider store={store}>

    <div className="app">
     <Header/>

     {/* {!user ? (<Login/>) : 
     ( */}
      <div className='app_body'>
      <Sidebar/>
      <Feed/>
           {/*widget*/}
      </div>
     {/* )
     
     } */}

    </div>
    </Provider>

  );
}

export default App;
