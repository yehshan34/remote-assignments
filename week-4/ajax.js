function ajax(src, callback) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			var data = JSON.parse(request.responseText);
			callback(data);
		}
	}
	request.open("GET", src);
	request.send();
}

function render(data){
	for (let i = 0 ; i < data.length ; i++){
		let section = document.getElementById("products");
		let div = document.createElement("div");

		let name = document.createElement("h2");
		let price = document.createElement("div");
		let description = document.createElement("p");

		let nameText = document.createTextNode(data[i].name);
		let priceText = document.createTextNode("$ " + data[i].price);
		let descriptionText = document.createTextNode(data[i].description);

		div.classList.add("product");

		name.classList.add("name");
		price.classList.add("price");
		description.classList.add("description");

		name.appendChild(nameText);
		price.appendChild(priceText);
		description.appendChild(descriptionText);

		div.appendChild(name);
		div.appendChild(price);
		div.appendChild(description);

		section.appendChild(div);
	}
          // document.createElement() and appendChild() are preferred. 
          // No innerHTML or // something alike
    }

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function(response){
    render(response);
}); // you should get product information in JSON format and render data in the page
