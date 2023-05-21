import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
