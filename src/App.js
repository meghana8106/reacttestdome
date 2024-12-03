import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import FocusableInput from '../src/components/FocusableInput';
import TodoList from '../src/components/TodoList';
import ChangeUserName from '../src/components/ChangeUserName';


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

function App() {
  return (
    <Router>
        <nav>
            <ul>
            <li>
                <Link to='/focusableinput'>Focusable Input</Link>
              </li>
              <li>
                <Link to='/todolist'>Todo List</Link>
              </li>
              <li>
                <Link to='/changeusername'>ChangeUserName</Link>
              </li>
            </ul>
        </nav>
        <Routes>
        <Route path='/focusableinput' element={<FocusableInput shouldFocus={true}/>}></Route>
        <Route path='/changeusername' element={<ChangeUserName/>}></Route>
        <Route path='/todolist' element={<TodoList items={items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;

