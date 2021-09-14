/* List of countries & their land mass */

const countries = [{
	'name': 'Spain',
	'size_km2': 505990,
	'image': ["assets/images/spain.png"]
},
{
	'name': 'Egypt',
	'size_km2': 1010000,
	'image': ["assets/images/egypt.png"]
},
{
	'name': 'England',
	'size_km2': 130279,
	'image': ["assets/images/england.png"]
},
{
	'name': 'Canada',
	'size_km2': 9985000,
	'image': ["assets/images/canada.png"]
},
{
	'name': 'Yemen',
	'size_km2': 555000,
	'image': ["assets/images/yemen.png"]
},
{
	'name': 'Turkey',
	'size_km2': 783562,
	'image': ["assets/images/turkey.png"]
},
{
	'name': 'Brazil',
	'size_km2': 8516000,
	'image': ["assets/images/brazil.png"]
},
{
	'name': 'France',
	'size_km2': 632734,
	'image': ["assets/images/france.png"]
},
{
	'name': 'Peru',
	'size_km2': 1285000,
	'image': ["assets/images/peru.png"]
},
{
	'name': 'Mexico',
	'size_km2': 1973000,
	'image': ["assets/images/mexico.png"]
},
{
	'name': 'Germany',
	'size_km2': 357386,
	'image': ["assets/images/germany.png"]
},
{
	'name': 'Poland',
	'size_km2': 312679,
	'image': ["assets/images/poland.png"]
},
{
	'name': 'Greece',
	'size_km2': 131957,
	'image': ["assets/images/greece.png"]
},
{
	'name': 'Ireland',
	'size_km2': 84421,
	'image': ["assets/images/ireland.png"]
},
{
	'name': 'Kazakhstan',
	'size_km2': 2725000,
	'image': ["assets/images/kazakhstan.png"]
},
]
const num_questions = 10

/* Game logic setup */

function setupGame() {
let firstCountry = chooseRandomCountry()
let secondCountry = chooseRandomCountry(firstCountry)

document.getElementById('first_question_choice').checked = false
document.getElementById('second_question_choice').checked = false

document.getElementById('first_question').innerHTML = firstCountry.name
document.getElementById('second_question').innerHTML = secondCountry.name

document.getElementById('first_question_choice').value = firstCountry.name
document.getElementById('second_question_choice').value = secondCountry.name

/* Returns image associated with country */ 

const img1 = document.querySelector("#first_question_image")
img1.src = firstCountry.image

const img2 = document.querySelector("#second_question_image")
img2.src = secondCountry.image

total_score = parseInt(document.getElementById('score').innerHTML) + parseInt(document.getElementById('incorrect').innerHTML)

if (total_score >= num_questions) {
	document.getElementById('game_area').style.display = "none"
	document.getElementById('play_again').style.display = "block"
}
}

/* Lets user play the game again with a starting score of 0 */ 

function playAgain() {
document.getElementById('score').innerHTML = 0
document.getElementById('incorrect').innerHTML = 0
document.getElementById('game_area').style.display = "block"
document.getElementById('play_again').style.display = "none"
setupGame()
}


/* Return a random country from COUNTRIES */

function chooseRandomCountry(exclude = null) {
if (exclude) {
	var filtered_countries = countries.filter(function (value, index, arr) {
		return index != countries.indexOf(exclude);
	});
	return filtered_countries[getRandomArbitrary(0, filtered_countries.length)]
} else {
	return countries[getRandomArbitrary(0, countries.length)]
}
}

/* Return the country object (which includes the size) */

function getCountryByName(country_name) {

var country = countries.filter(function (value, index, arr) {
	return value.name == country_name;
});
return country[0]
}

function getRandomArbitrary(min, max) {
return Math.floor(Math.random() * (max - min) + min)
}


/* Sets up the game */ 

setupGame()

function chooseAnswer() {
chosen_answer = getCountryByName(getCountrySelected())
form_data = getFormData()
first_choice = getCountryByName(form_data[0])
second_choice = getCountryByName(form_data[1])

/* Calculates if the chosen answer is correct or incorrect */ 

if (chosen_answer.name == first_choice.name) {
	if (chosen_answer.size_km2 > second_choice.size_km2) {
		plus_score()
	} else {
		minus_score()
	}
}

if (chosen_answer.name == second_choice.name) {
	if (chosen_answer.size_km2 > first_choice.size_km2) {
		plus_score()
	} else {
		minus_score()
	}
}
setupGame()
}

/* Adds score to either correct or incorrect */ 

function plus_score() {
return document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1
}


function minus_score() {
return document.getElementById('incorrect').innerHTML = parseInt(document.getElementById('incorrect').innerHTML) + 1
}

function getCountrySelected() {
var ele = document.getElementsByName('question');

for (i = 0; i < ele.length; i++) {
	if (ele[i].checked)
		return ele[i].value;
}
}

function getFormData() {
first_choice = document.getElementById('first_question_choice').value,
	second_choice = document.getElementById('second_question_choice').value
return [first_choice, second_choice]
}