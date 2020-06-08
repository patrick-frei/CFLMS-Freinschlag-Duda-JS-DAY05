$.getJSON("js/books.json", function(books) {
	for (i in books) {
		document.write(`<p>book title: ${books[i].title} Author: ${books[i].author}</p>`)
	}
	document.write("<br><br><h3>Books</h3><ul>")
	for (i in books) {
		document.write(`<li><p>${books[i].title}</p><img src="${books[i].img}"</li>`)
		if (books[i].read /* == true wird nicht unbedingt benbötigt, da typeof(books[i].read) === boolean */) {
			document.querySelectorAll("li img")[i].style.border = "5px solid pink"
		}
	}
	document.write("</ul>")
})