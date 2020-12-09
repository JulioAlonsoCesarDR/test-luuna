import './App.css';
import NavSearch from './components/NavSearch';
import Header from './containers/Header';
import ListRepo from './containers/ListRepo';
import ListUsers from './containers/ListUsers';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavSearch/>
      {/* <ListUsers/> */}
      <ListRepo/>
    </div>
  );
}

export default App;
