import '..//src/App.css'
import Header from './components/Header.js'
import Todo from './components/Todo';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "Header">
        <Header />
      </div>
      <div className = "Form">
        <Todo />
      </div> 
    </div>
  );
}

export default App;
