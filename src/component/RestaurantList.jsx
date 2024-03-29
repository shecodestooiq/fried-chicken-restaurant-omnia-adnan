import RestaurantCard from "./RestaurantCard";

function RestaurantList(props) {
    const data=[{name: "Chicken Run", location:" البنوك",rating: 3.8},
                {name: "مطعم هايزن  ",location:"اليرموك",rating: 3.7},
                {name: "فرايد تشكين",location:"كرادة خارج",rating: 4.5},
                {name: "Texas Chicken",location:"شارع الربيعي",rating: 4.3},
                {name: "فلافل البركة",location:"شارع الصناعة",rating: 5}]

    const showcase = data.map((item, index) => (
        <RestaurantCard key={index} name={item.name} location={item.location} rating={item.rating} />
    ))
    return(
        <div>
            {showcase}
        </div>
    )
}
export default RestaurantList;