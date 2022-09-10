// Global variables
var crust = document.getElementById("aCrust");
var sauce = document.getElementById("aSauce");
var toppings = []; // toppings array

// event listener
var formButton = document.getElementById('btn');
formButton.addEventListener("click", function getOrder(event) {
    event.preventDefault(); 
    
        var topping1 = document.getElementById("one").value;
       
        var topping2 = document.getElementById("two").value;
        
        var topping3 = document.getElementById("three").value;
        

   

       
        toppings.push(topping1, topping2, topping3);


    calculateTotal(toppings)

});       


    function calculateTotal(toppingArray) {
        let total = 0; 
        let toppingCost = 2.50; 
        let baseCost = 5.50; // cost of crust and sauce
        let orderString= crust.value + "crust pizza with" + sauce.value; // order string concatenation
        let toppingString = "Toppings: ";

        for (var i = 0; i < toppingArray.length; i++){ // For Loop


            if (toppingArray[i] !== ""){
               
                toppingString = toppingString + toppingArray[i] + " ";
                total = total + toppingCost;
                 
            }
         
        }
    
       total = total + baseCost; 

    document.getElementById("total").innerHTML += total; // set DOM total += total  

    document.getElementById("pizzaOrder").innerHTML= orderString; // use DOM: = orderString

    document.getElementById("toppings").innerHTML = toppingString; // use DOM: = toppingString

};