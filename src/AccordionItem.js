const AccordionItem = ({handleClick, name, tagline, first_brewed, description}) => {

    return (
        <div className="beer" onClick={handleClick}>
            <h2>{name}</h2>
            <div className="details">
                <h3>{tagline}</h3>
                <h4>Date first brewed: {first_brewed}</h4>
                <p>Description: {description}</p>
            </div>
        </div>
    )
}

export default AccordionItem;