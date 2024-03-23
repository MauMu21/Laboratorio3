/*Convierte las siguientes funciones en arrow functions.
1.-
function sortFruits(fruits) {
	return fruits.sort();
} 
2.-
function getElementInTheMiddle(list) {
	return list[list.length / 2];
}
3.-
function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}*/

/*1.-*/
let sortFruits = fruits => fruits.sort();
/*2.-*/
let getElementInTheMiddle = list => list[Math.floor(list.length / 2)];
/*3.-*/
let adminLogin = user => (user == "ADMIN" || user == "DEV") ? true : false;
