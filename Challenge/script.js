let carElements = document.getElementsByClassName("cars")
$.getJSON("data.json", function(cars) {
    for (i in cars){
		carElements[i].children[0].innerHTML = cars[i].name
		carElements[i].children[1].innerHTML += `<p>Production Year: ${cars[i].productionYear}</p>`
		carElements[i].children[1].innerHTML += `<p>Price: ${cars[i].price}</p>`
		carElements[i].children[1].innerHTML += `<img src=${cars[i].img}>`
		carElements[i].children[0].addEventListener("click", function(element) {
			element.target.nextElementSibling.classList.toggle("insert")
		})
	}
})