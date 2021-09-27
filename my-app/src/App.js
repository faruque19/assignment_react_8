import './App.css';
import Header from './component/Header/Header';
import Items from './component/Items/Items';

function App() {
  return (
    <div>
      {/* this is header container */}
      <Header></Header>
      {/* this is item container */}
      <Items></Items>
    </div>
  );
}

export default App;

