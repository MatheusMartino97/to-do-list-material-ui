import './App.css';
import { Route, Switch } from 'react-router';
import AddNote from './pages/AddNote';
import Notes from './pages/Notes';

function App() {
  return (
    <Switch>
      <Route path="/add-note" component={ AddNote } />
      <Route path="/"  component={ Notes } />
    </Switch>
  );
}

export default App;
