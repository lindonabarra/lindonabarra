import './App.css';
import {RouterProvider} from 'react-router-dom'
//pages import section
import {router} from './nav/NavigationLinks'


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
