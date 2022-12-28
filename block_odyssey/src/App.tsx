import Search from './componet/Search';
import ShowData from './componet/ShowData';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Search />
        <ShowData />
      </Provider>
    </div>
  );
}

export default App;
