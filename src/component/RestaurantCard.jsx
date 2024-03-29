function RestaurantCard(props) {
    return(
    <>
    <section>
        <div className="contener">
        <div className="card">
        <h1>{props.name}</h1>
        <h2>{props.location}</h2>
        <h1>{props.rating}/5</h1>
        </div>
        </div>
    </section>
    </>
    );
}
export default RestaurantCard;