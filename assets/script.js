const countries = [
    {
      'name': 'Spain',
      'size_km2': '505990',
    },
    {
      'name': 'Egypt',
      'size_km2': '1010000',
    },
    {
        'name': 'England',
        'size_km2': '1010000',
      },
      {
        'name': 'Canada',
        'size_km2': '9985000',
      },
      {
        'name': 'Yemen',
        'size_km2': '555000',
      },
      {
        'name': 'Turkey',
        'size_km2': '783562',
      },
      {
        'name': 'Brazil',
        'size_km2': '8516000',
      },
      {
        'name': 'France',
        'size_km2': '632734',
      },
      {
        'name': 'Peru',
        'size_km2': '1285000',
      },
      {
        'name': 'Mexico',
        'size_km2': '1973000',
      },
      {
        'name': 'Germany',
        'size_km2': '357386',
      },
      {
        'name': 'Poland',
        'size_km2': '312679',
      },
      {
        'name': 'Greece',
        'size_km2': '131957',
      },
      {
        'name': 'Ireland',
        'size_km2': '84421',
      },
      {
        'name': 'Kazakhstan',
        'size_km2': '2725000',
      },

  ]

  const num_questions = 10

  /* Set up the game canvas. */
  
function setupGame() {

  for (let i = 1; i < num_questions; i++){

    let firstCountry = chooseRandomCountry()
    let secondCountry = chooseRandomCountry()

    while (firstCountry.name === secondCountry.name) {
      secondCountry = chooseRandomCountry()
    }

    let questionHTMLElement = generateQuestionHTMLElement(
        firstCountry, secondCountry
    )

    questionCanvas.innerHTML = ''
    questionCanvas.appendChild(questionHTMLElement)

  }
}