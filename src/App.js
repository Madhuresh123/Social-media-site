import './App.css';
import Feed from './Feed';
import Header from "./Header";
import Sidebar from './Sidebar';
import Login from './Login';
import {useSelector} from "react-redux";
// import { selectUser } from './features/userSlice';


function App() {

  // const user = useSelector(selectUser)

  const user = useSelector((state) => state.user && state.user.user);


  return (

    <div className="app">
     <Header/>

      {!user ? (<Login/>) : 
     ( 
      <div className='app_body'>
      <Sidebar/>
      <Feed/>
           {/*widget*/}
      </div>
      )
     
     } 

    </div>

  );
}

export default App;
