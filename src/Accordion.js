import {useState, useEffect} from 'react';
import AccordionItem from './AccordionItem';


const Accordion = () => {

    const [beers, setBeers] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://api.punkapi.com/v2/beers?per_page=3');
            if (response.ok) {
                const data = await response.json();
                setBeers(data);  
            } else {
                console.log('There was a problem fetching the beers.');
            }
            
        }

        fetchData();
    }, []);

    console.log(beers);

    const handleClick = (e) => {
        let item = e.currentTarget.querySelector('.details');
       if ( item.style.display === 'block') {
        item.style.display = 'none';
       } else {
        item.style.display = 'block';
       }
    }
    
    return (
        <div className="beer-container">
            { beers.map( beer => 
                <AccordionItem
                    handleClick={handleClick}
                    abv={beer.abv} 
                    name={beer.name}
                    tagline={beer.tagline}
                    first_brewed={beer.first_brewed}
                    description={beer.description} 
                    key={beer.id} 
                />
                ) 
            }
        </div>
    );
}


export default Accordion;