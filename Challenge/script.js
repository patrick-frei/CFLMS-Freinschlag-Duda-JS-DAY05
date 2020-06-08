$.getJSON("data.json", function(cars) {
    
    for (i in cars){
        console.log(cars[i].name)}
    
})