const Toppings = document.getElementsByClassName("Topping")

for (const Topping of Toppings) {
    Topping.addEventListener("click",(e) => {
        console.log(e.target.innerText)
    });
}