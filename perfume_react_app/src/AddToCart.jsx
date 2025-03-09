import { useEffect, useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "react-notifications/lib/notifications.css";

export default function AddToCart(details, quant) {
  let storedCart = localStorage.getItem("addToCart");
  let listLocalStorage = storedCart ? JSON.parse(storedCart) : [];
  // let [added, setAdded] = useState(null);

  // useEffect(() => {
  //   if (added === true){
  //     NotificationManager.success("Added to Cart!", "Success");
  //   }
  //   else{
  //     NotificationManager.error("Failed to Add!", "Error");
  //   }
  // }, [added])


    if (quant > 0){
        let newDetails = {
            id: details.id,
            name: details.name,
            categories: details.categories,
            price: details.price,
            quantity: quant,
            description: details.description,
            image: details.image
        }

        let existingItem = listLocalStorage.find((item) => item.id === newDetails.id);

        if (existingItem) {
          // Update quantity if the product exists
          listLocalStorage = listLocalStorage.map((item) =>
              item.id === newDetails.id ? { ...item, quantity: quant } : item
          );
        }
        else {
         // Add new item to the cart
         listLocalStorage.push(newDetails);
        }

        localStorage.setItem("addToCart", JSON.stringify(listLocalStorage));

        console.log("Updated Cart:", listLocalStorage);
        NotificationManager.success("Added to Cart!", "Success");
    }
    else{
      NotificationManager.error("Failed to Add!", "Error");
    }

    
    
  return (
    <div>
        <NotificationContainer></NotificationContainer>
        
    </div>
  )
}
