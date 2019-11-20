// let siswa = {
// 	nama : "hendra",
// 	nim: "012312",
// 	email: "hendra@gmail.com"
// }

// console.log(JSON.stringify(siswa));
// 

// javascript
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
// 	if(xhr.readyState == 4 && xhr.status == 200){
// 		let siswa = JSON.parse(this.responseText);
// 		console.log(siswa);
// 	}
// }
// xhr.open('GET','coba.json',true);
// xhr.send();
// 

// jquery

$.getJSON('coba.json', function(data) {
	console.log(data);
});