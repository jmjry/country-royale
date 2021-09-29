/* List of countries & their land mass */
const countries = [{
	'name': 'Australia',
	'size_km2': 7692000,
	'image': ['assets/images/australia.png']
},
{
	'name': 'Canada',
	'size_km2': 9985000,
	'image': ['assets/images/canada.png']
},
{
	'name': 'Turkey',
	'size_km2': 783562,
	'image': ['assets/images/turkey.png']
},
{
	'name': 'Brazil',
	'size_km2': 8516000,
	'image': ['assets/images/brazil.png']
},
{
	'name': 'France',
	'size_km2': 632734,
	'image': ['assets/images/france.png']
},
{
	'name': 'Mexico',
	'size_km2': 1973000,
	'image': ['assets/images/mexico.png']
},
{
	'name': 'Germany',
	'size_km2': 357386,
	'image': ['assets/images/germany.png']
},
{
	'name': 'Poland',
	'size_km2': 312679,
	'image': ['assets/images/poland.png']
},
{
	'name': 'Greece',
	'size_km2': 131957,
	'image': ['assets/images/greece.png']
},
{
	'name': 'Ireland',
	'size_km2': 84421,
	'image': ['assets/images/ireland.png']
},
{
	'name': 'Kazakhstan',
	'size_km2': 2725000,
	'image': ['assets/images/kazakhstan.png']
},
{
	'name': 'New Zealand',
	'size_km2': 268021,
	'image': ['assets/images/newzealand.png']
},
{
	'name': 'Mongolia',
	'size_km2': 1564000,
	'image': ['assets/images/mongolia.png']
},
{
	'name': 'Iceland',
	'size_km2': 103000,
	'image': ['assets/images/iceland.png']
},
{
	'name': 'Madagascar',
	'size_km2': 587041,
	'image': ['assets/images/madagascar.png']
},
{
	'name': 'South Africa',
	'size_km2': 1220000,
	'image': ['assets/images/southafrica.png']
},
{
	'name': 'Sierra Leone',
	'size_km2': 71740,
	'image': ['assets/images/sierraleone.png']
},
{
	'name': 'Mauritania',
	'size_km2': 1030000,
	'image': ['assets/images/mauritania.png']
},
{
	'name': 'Cambodia',
	'size_km2': 181035,
	'image': ['assets/images/cambodia.png']
},
{
	'name': 'Malaysia',
	'size_km2': 329847,
	'image': ['assets/images/malaysia.png']
},
];
const num_questions = 10;

/**  
* Game logic setup 
* @param firstCountry - chooses a random country from array
* @param secondCountry - chooses a random country from array but checks it's not the same as first
*/

function setupGame() {
let firstCountry = chooseRandomCountry();
let secondCountry = chooseRandomCountry(firstCountry);

document.getElementById('first_question_choice').checked = false;
document.getElementById('second_question_choice').checked = false;

document.getElementById('first_question').innerHTML = firstCountry.name;
document.getElementById('second_question').innerHTML = secondCountry.name;

document.getElementById('first_question_choice').value = firstCountry.name;
document.getElementById('second_question_choice').value = secondCountry.name;

/**  
 * Returns image associated with country 
 * @param img1 - gets an image from the array 
 * @param img2 - gets an image from the array */

const img1 = document.querySelector("#first_question_image");
img1.src = firstCountry.image;

const img2 = document.querySelector("#second_question_image");
img2.src = secondCountry.image;

/**
 * @param total_score - calculates the total score
 */

total_score = parseInt(document.getElementById('score').innerHTML) + parseInt(document.getElementById('incorrect').innerHTML);

/**
 * @param - displays play_again if total score equals total number of questions
 */

if (total_score >= num_questions) {
	document.getElementById('game_area').style.display = "none";
	document.getElementById('play_again').style.display = "block";
}
}

/** 
* @param playAgain -Lets user play the game again with a starting score of 0 */

function playAgain() {
document.getElementById('score').innerHTML = 0;
document.getElementById('incorrect').innerHTML = 0;
document.getElementById('game_area').style.display = "block";
document.getElementById('play_again').style.display = "none";
setupGame();
}


/** 
* @param chooseRandomCountry - Return a random country from countries */

function chooseRandomCountry(exclude = null) {
if (exclude) {
	let filtered_countries = countries.filter(function(value, index, arr) {
		return index != countries.indexOf(exclude);
	});
	return filtered_countries[getRandomArbitrary(0, filtered_countries.length)];
} else {
	return countries[getRandomArbitrary(0, countries.length)];
}
}

/** 
* @param getCountryByName - Return the country object (which includes the size) */

function getCountryByName(country_name) {

let country = countries.filter(function(value, index, arr) {
	return value.name == country_name;
});
return country[0];
}

function getRandomArbitrary(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}


/** 
* @param setupGame - Sets up the game */

setupGame();

function chooseAnswer() {
chosen_answer = getCountryByName(getCountrySelected());
form_data = getFormData();
first_choice = getCountryByName(form_data[0]);
second_choice = getCountryByName(form_data[1]);

/** 
 *  Calculates if the chosen answer is correct or incorrect 
 */

if (chosen_answer.name == first_choice.name) {
	if (chosen_answer.size_km2 > second_choice.size_km2) {
		plus_score();
	} else {
		minus_score();
	}
}

if (chosen_answer.name == second_choice.name) {
	if (chosen_answer.size_km2 > first_choice.size_km2) {
		plus_score();
	} else {
		minus_score();
	}
}
setupGame();
}

/** 
@param plus_score - Adds score to correct 
@param minus_score - Adds score to incorrect 
*/

function plus_score() {
return document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
}


function minus_score() {
return document.getElementById('incorrect').innerHTML = parseInt(document.getElementById('incorrect').innerHTML) + 1;
}

function getCountrySelected() {
let ele = document.getElementsByName('question');

for (i = 0; i < ele.length; i++) {
	if (ele[i].checked)
		return ele[i].value;
}
}

function getFormData() {
first_choice = document.getElementById('first_question_choice').value,
	second_choice = document.getElementById('second_question_choice').value;
return [first_choice, second_choice];
}