import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  console.log(process.env.REACT_APP_MY_ENV_VAR);


  return (
    // Using React Router's Routes component to handle routing
    <Routes>

      {/* Root route with Layout as the main component */}
      <Route path='/' element={< Layout />}>

        {/* Default index route inside the root, renders the Home component */}
        <Route index element={< Home />} />

        {/* Route for the About page */}
        <Route path='/about' element={<About />} />

        {/* Route for the Contact page */}
        <Route path='/contact' element={<Contact />} />

      </Route>
    </Routes>
  );
}

export default App;
