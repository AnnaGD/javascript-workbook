// let i = 0
// do {
//     i+=1
//     console.log (i)
// }
// while (i<1000)

let person = {
	firstName: "Jane",
	lastName: "Doe",
	birthDate: "Jan 5, 1925",
	gender: "female"
};

let birthYear = person.birthDate[person.birthDate.length - 1];

if (birthYear % 2 !== 0) {
	console.log(person.birthDate);
}

// console.log (birthYear)
