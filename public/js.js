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
















var HTML = document.getElementById("myFrame");

var doSomething = function(event, data){
    console.log(event);
    console.log(data);
    alert("FRame me up before you go go");
};

for(var count = 0; count < FRAMES.length; count++ )
{
    var d = FRAMES[count];
    var copy = HTML.cloneNode(true);
    copy.addEventListener("click", (e)=>{ doSomething(e,d) } );

    document.body.append(copy);

}


alert("?????");

var LIST=[
    {},
    {},
    {},
    {},
    {}
]

var TEMP= document.getElementById("temp");
 var TARGET= document.getElementById("target");

 var CARD=TEMP.querySelector(".card");

 for(var count=0;count<5;count++){
    var copyCard=CARD.cloneNode(true);
    copyCard.innerHTML="SILVER"+i;
    TARGET.append(copyCard);

 }





