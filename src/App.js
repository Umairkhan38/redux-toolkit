import Admin from './Admin';
import './App.css';
import CartItems from './CartItems';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Shop />
    <Admin />
    <CartItems />
    </div>
  );
}

export default App;
