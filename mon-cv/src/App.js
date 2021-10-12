import './styles/index.scss'
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import TicTac from './components/Titactoe/TicTac';
import Informations from './components/pages/Informations';
import Contact from './components/pages/Contact';
import PortFolio from './components/pages/PortFolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/game" exact component={TicTac}/>
          <Route path="/informations" exact component={Informations}/>
          <Route path="/portfolio" exact component={PortFolio}/>
          <Route path="/contact" exact component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
