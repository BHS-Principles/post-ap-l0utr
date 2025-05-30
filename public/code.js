alert("File \"code.js\" loads automatically");
button("hi","hi");
onEvent("hi","click", function(e){
    alert("hi");
    console.log(e);
});

var items=[
  {
    item:'Arizona Tea',
    category:"beverages",
    aisle:1
  },
  {
    item:"Doritos",
    category:"snacks",
    aisle:2
  }

]

onEvent("id", "event", function() {
  // code
});

setParent("child", "parent");

