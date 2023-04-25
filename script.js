function updateUrl() {
			var name = document.getElementById("name").value;
			var year = document.getElementById("year").value;
		    if(name !=="" && year==="")
				var url = "https://localhost:8080/?name=" + name;
			else if(year!=="" && name==="")
				var url = "https://localhost:8080/?year=" + year;
			else if(year!=="" && name!=="")
				var url = "https://localhost:8080/?name=" + name + "&year=" + year;
			document.getElementById("url").textContent = url;
}