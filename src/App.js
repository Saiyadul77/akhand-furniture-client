import './App.css';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Akhand Furniture</h1>
      <h3>Choose 4 Furnitures</h3>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
