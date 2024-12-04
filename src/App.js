import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import FocusableInput from '../src/components/FocusableInput';
import TodoList from '../src/components/TodoList';
import ChangeUserName from '../src/components/ChangeUserName';
import Focus from '../src/components/Focus';
import ToggleMessage from '../src/components/ToggleMessage';
import GroceryApp from '../src/components/GroceryApp';
import ImageGalleryApp from '../src/components/ImageGalleryApp';

const items = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];

const products = [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 }
];

const links = [
  "https://bit.ly/3xXPxPR", 
  "https://bit.ly/4de3sQr"
];

const defaultProps = {
  focused: false
};

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
          <li>
            <Link to='/focus'>Focus</Link>
          </li>
          <li>
            <Link to='/togglemessage'>ToggleMessage</Link>
          </li>
          <li>
            <Link to='/groceryapp'>Grocery App</Link>
          </li>
          <li>
            <Link to='/imagegalleryapp'>Image Gallery APP</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/focusableinput' element={<FocusableInput shouldFocus={true} />}></Route>
        <Route path='/changeusername' element={<ChangeUserName />}></Route>
        <Route path='/todolist' element={<TodoList items={items}
          onListClick={(event) => console.log("List clicked!")}
          onItemClick={(item, event) => { console.log(item, event) }} />}></Route>
        <Route path='/focus' element={<Focus focused={defaultProps.focused} />}></Route>
        <Route path='/togglemessage' element={<ToggleMessage />}></Route>
        <Route path='/groceryapp' element={<GroceryApp products={products} />}></Route>
        <Route path='/imagegalleryapp' element={<ImageGalleryApp links={links} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

