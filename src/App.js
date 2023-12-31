import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ProjectsList from './Components/ProjectsList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ProjectsList/>
    </div>
  );
}

export default App;
