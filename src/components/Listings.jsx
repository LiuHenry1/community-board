import Card from "./Card";

const Listings = ({entries}) => {
    const cards = entries.map(entry => 
        <Card imgSrc={entry.imgSrc} name={entry.name} url={entry.url} />);
    return (
        <div id="container">
            {cards}
        </div>
    )
}

export default Listings;