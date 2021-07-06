import './App.css';
import Navigation from './navigation/Navigation';
import Header from './header/Header';
import Services from './services/Services'; 


function App() {
  return (
    <div className="App">

      <Navigation logoTitle = 'Tarang Nair'/>

      <Header/>

      <Services />

    </div>
  );
}

export default App;
