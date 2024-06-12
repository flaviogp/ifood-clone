import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-iten";

const RestaurantList = async () => {
    const restaurants = await db.restaurant.findMany({take:10});

    return ( 
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5">
            {restaurants.map(restaurant => 
                <RestaurantItem 
                    key={restaurant.id} 
                    restaurant={restaurant}
                />
            )}
        </div>
     );
}
 
export default RestaurantList;