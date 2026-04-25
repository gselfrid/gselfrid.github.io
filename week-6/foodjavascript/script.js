document.getElementById("spaghetti").addEventListener("click", function () {
    document.getElementById("food-name").textContent =
            meals.spaghetti.name;

    document.getElementById("food-img").innerHTML =
        `<img src="usedimgs/${meals.spaghetti.img}">`;

    document.getElementById("food-recipe").innerHTML =
        meals.spaghetti.recipe.map(item => `<li>${item}</li>`).join("");

});

document.getElementById("tacos").addEventListener("click", function (){

    document.getElementById("food-name").textContent =
        meals.tacos.name;

    document.getElementById("food-img").innerHTML =
        `<img src="usedimgs/${meals.tacos.img}">`;

    document.getElementById("food-recipe").innerHTML =
        meals.tacos.recipe.map(item => `<li>${item}</li>`).join("");
        
})

document.getElementById("fried-rice").addEventListener("click", function (){

    document.getElementById("food-name").textContent =
        meals.rice.name;

    document.getElementById("food-img").innerHTML =
        `<img src="usedimgs/${meals.rice.img}">`;

    document.getElementById("food-recipe").innerHTML =
        meals.rice.recipe.map(item => `<li>${item}</li>`).join("");
        
})

document.getElementById("spaghetti").addEventListener("mouseover", function(){

    document.getElementById("try").textContent =
        meals.spaghetti.try;

})

document.getElementById("tacos").addEventListener("mouseover", function(){

    document.getElementById("try").textContent =
        meals.tacos.try;

})

document.getElementById("fried-rice").addEventListener("mouseover", function(){

    document.getElementById("try").textContent =
        meals.rice.try;

})