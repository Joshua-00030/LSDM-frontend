import './App.css';
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className='homeContainer'>
      <div style={{backgroundColor: 'red'}}></div>
      <div className='bodyContainer'>
        <div style={{backgroundColor: 'green'}}></div>
        <div style={{backgroundColor: 'blue'}}></div>
      </div>
    </div>
  );
}

export default App;
