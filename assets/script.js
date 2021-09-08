/* List of countries & their land mass */

const countries = [
  {'name': 'Spain', 'size_km2': 505990},
  {'name': 'Egypt','size_km2': 1010000},
  {'name': 'England','size_km2': 130279},
  {'name': 'Canada','size_km2': 9985000},
  {'name': 'Yemen','size_km2': 555000},
  {'name': 'Turkey','size_km2': 783562},
  {'name': 'Brazil','size_km2': 8516000},
  {'name': 'France','size_km2': 632734},
  {'name': 'Peru','size_km2': 1285000},
  {'name': 'Mexico','size_km2': 1973000},
  {'name': 'Germany','size_km2': 357386},
  {'name': 'Poland','size_km2': 312679},
  {'name': 'Greece', 'size_km2': 131957},
  {'name': 'Ireland', 'size_km2': 84421},
  {'name': 'Kazakhstan','size_km2': 2725000,},

  ]

  /* Number of questions */ 

  const num_questions = 10

  /* Game logic setup */

  /* Randomly selects a country from the array */ 
  
 function setupGame() {
    let firstCountry = chooseRandomCountry()
    let secondCountry = chooseRandomCountry(firstCountry)

    document.getElementById('first_question_choice').checked = false
    document.getElementById('second_question_choice').checked = false

    document.getElementById('first_question').innerHTML = firstCountry.name
    document.getElementById('second_question').innerHTML = secondCountry.name

    document.getElementById('first_question_choice').value = firstCountry.name
    document.getElementById('second_question_choice').value = secondCountry.name

    total_score = parseInt(document.getElementById('score').innerHTML) + parseInt(document.getElementById('incorrect').innerHTML)
    if (total_score >= num_questions) {
        document.getElementById('game_area').style.display = "none"
        document.getElementById('play_again').style.display = "block"
    }
}

function generateQuestionHTMLElement(firstCountry, secondCountry) {

}

/* Return a random country from COUNTRIES 
@returns {object} - A country object chosen at random. */

    if (exclude) {
        var used_country_index = countries.indexOf(exclude);
        countries = countries.splice(0, used_country_index)
    }

    function chooseRandomCountry(exclude=null) {
        if (exclude) {
            var filtered_countries = countries.filter(function(value, index, arr){
                return index != countries.indexOf(exclude);
            });
            return filtered_countries[getRandomArbitrary(0, filtered_countries.length)]
        }
        else {
            return countries[getRandomArbitrary(0, countries.length)]
        }
    }