import React from 'react';
import { BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import MainPages from './component/MainPages';
import Navbar from './component/Navbar';
import Product from './component/Product';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={MainPages}/>
        <Route path='/product' exact component={Product}/>
      </Switch>
     </Router> 
    
  );
}

export default App;
