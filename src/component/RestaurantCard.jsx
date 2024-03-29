function RestaurantCard(props) {
    return(
    <>
        <div className="card">
        <h2 className="header">{props.name}</h2><br />
        <p className="container">{props.location}</p><br />
        <h2 className="container">{props.rating}</h2><br />
        </div>
    </>
    );
}
export default RestaurantCard;