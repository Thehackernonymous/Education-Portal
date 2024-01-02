import Carousel from './components/Carousel';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
// import UniversitySearch from './UniversitySearch.js';
// import SearchBar from './components/SearchBar';


function App() {
  return (
    
    <div className="App">
      <Header/>
      <Carousel/>
      <Main/>
      <Footer/>
      {/* <UniversitySearch /> */}
      {/* <SearchBar /> */}
    </div>
    
  );
}



export default App;