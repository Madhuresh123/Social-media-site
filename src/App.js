import './App.css';
import Feed from './Feed';
import Header from "./Header";
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
     <Header/>
    {/*App body*/}
     {/*sidebar*/}
     <div className='app_body'>
     <Sidebar/>
     <Feed/>
     </div>

     {/*feed*/}
     {/*widget*/}

    </div>
  );
}

export default App;
