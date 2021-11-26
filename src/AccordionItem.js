const AccordionItem = ({handleClick, name, tagline, first_brewed, description}) => {

    return (
        <div className="beer" onClick={handleClick}>
            <h2>{name}</h2>
            <div className="details">
                <h4>{tagline}</h4>
                <h6>{first_brewed}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default AccordionItem;