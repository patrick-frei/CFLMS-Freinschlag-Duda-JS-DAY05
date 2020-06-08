/*let readJSON = function (file) {
	let json = {}
	let req = new XMLHttpRequest()
	req.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		  json = JSON.parse(this.responseText)
		}
	}
    req.open("GET", file, true);
  	req.send();
  	return json
};
CODE WITH JQUERY*/
let readJSON = function (file) {
	let json = {}
	$.ajax({
	    'async': false,
	    'global': false,
	    'url': file,
	    'dataType': "json",
	    'success': function (data) {
	        json = data;
	    }
	});
	return json;
};
let books = readJSON("js/books.json")
for (i in books) {
	document.write(`<p>book title: ${books[i].title} Author: ${books[i].author}</p>`)
}
document.write("<br><br><h3>Books</h3><ul>")
for (i in books) {
	document.write(`<li><p>${books[i].title}</p><img src="${books[i].img}"</li>`)
	//== true wird nicht unbedingt benbötigt, da typeof(books[i].read) === boolean 
	if (books[i].read) {
		document.querySelectorAll("li img")[i].style.border = "5px solid pink"
	}
}
document.write("</ul>")