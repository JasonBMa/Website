import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ProjectsList from './Components/ProjectsList';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ProjectsList/>
      <Footer/>
    </div>
  );
}

export default App;
