var Costco_Menu=[
    "Chicken Bake",
    "Double Chunk Chocolate Cookie",
    "Cheese Pizza",
    "Pepperoni Pizza"
];

/*for(var i=0;i<Costco_Menu.length;i++){
    alert(Costco_Menu[i]);}
*/

function cycle_through(arr){
    for(var n=0;n<arr.length;n++){
        alert(arr[n]);
    }
}

//cycle_through(Costco_Menu);


var btn= document.getElementById("myButton");

function doThings(event){
    console.log(event);
}

for(var i=0;i<Costco_Menu.length;i++){
    var newBtn= btn.cloneNode(true);
    newBtn.innerHTML=Costco_Menu[i];
    document.body.append(newBtn);

    newBtn.addEventListener("click", doThings);
}







