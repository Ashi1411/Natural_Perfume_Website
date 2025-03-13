export default function AddToCart(details, quant) {
  let storedCart = localStorage.getItem("addToCart");
  let listLocalStorage = storedCart ? JSON.parse(storedCart) : [];

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
          listLocalStorage = listLocalStorage.map((item) =>
              item.id === newDetails.id ? { ...item, quantity: quant } : item
          );
        }
        else {
         listLocalStorage.push(newDetails);
        }

        localStorage.setItem("addToCart", JSON.stringify(listLocalStorage));

        console.log("Updated Cart:", listLocalStorage);
    }

    
    
  return (
    <div></div>
  )
}
