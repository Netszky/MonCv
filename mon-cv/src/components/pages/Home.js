import { useEffect } from 'react';
import 'react-router';
import Navigation from '../Navigation';

export default function Home(props) {
    return (
      
        <div className="container">
          <Navigation></Navigation>
          <div className="label-container">
            {/* <h1 className="color1">Chigot Julien</h1>
            <h1 className="color1">Apprenti Developpeur</h1> */}
          </div>
            
        </div>
        
    );
}