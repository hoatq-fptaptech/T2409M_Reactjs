import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
        <Header />  
        <Product price={15}/>
        <Product price={20}/>
    </div>
  );
}

export default App;
