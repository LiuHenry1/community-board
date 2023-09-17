const Card = (entry) => {
    return (
        <div className="Card">
            <img src={entry.imgSrc} />
            <h4>{entry.name}</h4>
            <a href={entry.url}>View Site</a>
        </div>
    )
}

export default Card;