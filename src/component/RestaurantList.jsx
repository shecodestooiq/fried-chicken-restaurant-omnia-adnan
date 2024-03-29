import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
    const data=[{name: "Chicken Run", location:" البنوك",rating: 3.8},
                {name: "مطعم هايزن _Heisen ",location:"Al-Yarmok",rating: 3.7},
                {name: "فرايد تشكين - Fried Chicken",location:"Outer Karrada",rating: 4.5},
                {name: "Texas Chicken",location:"شارع الربيعي",rating: 4.3},
                {name: "حسين الوصخ",location:"Al Senaha St",rating: 5}]

    const showcase = data.map((item) => (
        <RestaurantCard name={item.name} location={item.location} rating={item.rating} />
    ))
    return(
        <div>
            {showcase}
        </div>
    )
}
export default RestaurantList;