import {useState, useEffect} from 'react';
import Accordion from './Accordion';
import CTAGrid from './CTAGrid';


function App() {

  const [beers, setBeers] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://api.punkapi.com/v2/beers?per_page=8');
            if (response.ok) {
                const data = await response.json();
                setBeers(data);  
            } else {
                alert('There was a problem fetching the beers, please try again later.');
            }
            
        }

        fetchData();
    }, []);


  return (
    <div className="App">
      <header>
        <h3>Cheers Beers</h3>
      </header>
      <Accordion beersArray={beers} />
      <CTAGrid beersArray={beers} />
    </div>
  );
}

export default App;
