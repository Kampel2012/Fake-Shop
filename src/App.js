import Cart from './components/Cart';
import MyInput from './components/MyInput';
import Table from './components/Table';

function App() {
  return (
    <div className="App ">
      <div className="max-w-[1170px] mx-auto">
        <header className="App-header"></header>
        <div className="container mx-auto relative">
          <MyInput name="Поисковая строка" />
          <Cart />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
