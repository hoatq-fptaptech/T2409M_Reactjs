import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
        <Header />  
        <Product name="Iphone 15" price={15}/>
        <Product name="Iphone 16" price={20}/>
    </div>
  );
}

export default App;
