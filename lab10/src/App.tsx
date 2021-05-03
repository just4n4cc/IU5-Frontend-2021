import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Routes from "./routes"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
