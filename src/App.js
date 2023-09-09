import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Todos from './Todos';
import Todo from './Todo';
//Routing for different paths
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route exact path ="/" element={<Todos/>}/>
          <Route path ="/todo/:id" element={<Todo/>}/>
        </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
