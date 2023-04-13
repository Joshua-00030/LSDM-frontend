import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';
function App() {
  return (
    <div className='homeContainer'>
      <Navbar/>
      <div className='bodyContainer'>
        <Sidebar/>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
