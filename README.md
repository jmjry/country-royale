# Country-Royale

<img width="1626" alt="responsive image" src="https://user-images.githubusercontent.com/86608354/134350715-a44fd2df-2e24-402a-8a94-7fb52d8589ad.png">


## Planning process:

[Mobile Wireframe 2 (PP2).pdf](https://github.com/jmjry/country-royale/files/7170430/Mobile.Wireframe.2.PP2.pdf)


### Changes to my planning process: 

#### Intial Design
* Removed additional pages 
* Adjusted image positions 
* Removed Navbar 
* Removed additional pages 
* Adjusted image positions 
* Removed Navbar 

## Technologies: 

For this project I will be using HTML5, CSS & JavaScript.

### Frameworks, Libraries & Programs: 
* [GitPod](https://www.gitpod.io/) was the version control used.
* [GitHub](https://github.com/) is the repository used for project codes to be pushed from GitPod.
* [Balsamiq](https://balsamiq.com/) was used to create wireframes during the design process of this project.

## Features 

### Current features:

* F1 - The logo to Country Royale is simple styled text and is placed at the top of the page. It's style is similar to the rest of Country Royale and represents the branding of Country Royale.

![logo](https://user-images.githubusercontent.com/86608354/134344465-0a3e3843-6d81-4948-a218-8dbb5188cb90.png)


* F2 - "Which country is bigger" is the question every user is trying to answer. This will appear everytime new options are generated.
 
![main header](https://user-images.githubusercontent.com/86608354/134344705-685db1a6-fabc-47d1-8930-0e30d7e81094.png)


* F3 - Immediately after loading, two options are generated randomly from a list created. The two options will display the Country Name & Relevant Image. The user is then able to click on which country they think is bigger, before submitting their answer. When a user clicks on an image, it will highlight as shown in the image below. This was added to improve user experience and understanding.

![1st option](https://user-images.githubusercontent.com/86608354/134345859-6bcabea6-a18b-4661-b2df-82a4440549bd.png)
![selected option](https://user-images.githubusercontent.com/86608354/134346222-6875f62d-1b52-4c93-8075-3e090e5009db.png)

* F4 - The submit answer button will interchange colours to signal to a user that their answer has been submitted. Once the submit answer is clicked by a user, a calculation happens that compares both of the countries to decide if the user was correct or incorrect.

![submit answer ](https://user-images.githubusercontent.com/86608354/134346272-e89d3ad3-5bd4-4486-bd55-ecef7a555169.png)
![submit answer clicked](https://user-images.githubusercontent.com/86608354/134346276-d9e8cacd-a387-4dcd-9d93-09135fdd6d82.png)


* F5 - The score will signal to users if they are correct or incorrect after submitting their answer. This will automatically update and be visible to the user. 

![score ](https://user-images.githubusercontent.com/86608354/134346294-385dc631-c07b-4acd-9ca2-5dfc68ab8654.png)
![active score ](https://user-images.githubusercontent.com/86608354/134346298-b38e25f8-c4f0-49ab-9664-3fd6486fa435.png)

* F6 - If clicked, this will restart the score to 0 and let the user play again without answering 10 questions. This will always be available on the page for a user to click.

![restart game ](https://user-images.githubusercontent.com/86608354/134346320-e97b1388-2000-4032-8573-4149daaadaf3.png)
![restart game clicked](https://user-images.githubusercontent.com/86608354/134346365-e6092a78-7123-4a6b-9941-beab41e8ef03.png)

* F7 - After answering 10 total questions, the game will present the user their final score and offer them the opportunity to play again. 

![play again](https://user-images.githubusercontent.com/86608354/134346376-e6373ff6-e13c-4133-ac34-f359478f2535.png)

### Features which could be implemented in the future:

* F9 - Leaderboard which lets a user input a unique name and tracks scores to be compared with other users would be a future feature to be added into Country Royale.

## Testing 

Testing was undertaken at the start, during and after finishing my project. To complete my testing I used the [Google Chrome DevTool](https://developer.chrome.com/docs/devtools/), a spreadsheet to track tests, validators (as seen below) and reviews by peers (as seen in the credits).

### Feature testing 
* Each feature was tested for responsiveness on desktop, tablet and mobile. If the feature responded correctly then it was marked green on my spreadsheet.
* All features that had links were tested to ensure the link would work when a user click on it. All of the links passed the test and was marked green.
* All form fields were tested to ensure the correct information was submitted. The form fields passed the test and was marked green. 

### Responsiveness testing 

* All responsiveness testing was done in the Google Chrome devtool. As I designed my website for desktop, I used media queries across the site to ensure that the website remained responsive at widths all the way down to 320px. 
* After my testing I decided that in the future I will initially design for mobile and then work the responsiveness up.

### Validator testing 

* HTML 
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html) 
<img width="1680" alt="HTML Validation (1)" src="https://user-images.githubusercontent.com/86608354/135063381-3c3a3382-0c3c-495e-98fe-109087f86e92.png">
<img width="1680" alt="HTML Validation (2)" src="https://user-images.githubusercontent.com/86608354/135063410-10d36b32-351d-4646-b75b-000dbb3c5431.png">

 * CSS
   * No erros were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)  
 <img width="1680" alt="CSS Validation" src="https://user-images.githubusercontent.com/86608354/135063432-f22c3f7d-5047-4296-9841-586a11d66e6e.png">

 * JavaScript 
  * No errors were foudn when passing through the official [JSHint validator](https://jshint.com/)

 ### Accessibility testing 
 
 ### Known Bugs 
 
 * During the testing of my project, after the removal of radio buttons I noticed that there was no indication for the user when selecting an answer. This has since been fixed but was recorded as a bug during time of testing.
 
 ## Deployment 

### How was this site deployed? 

* Firstly, I opened up country-royale in the GitHub repository and navigated to the Settings tab. After selecting Settings, I proceeded to click on Pages.
* Following this, I selected Master Branch from the source section.
* After selecting Master Branch, the page will now automatically refresh to display a succesful deployment. 
* Any future changes pushed to the same Master Branch will now take effect on the live page (after a few minutes).

[Link to live site](https://jmjry.github.io/country-royale/)

### Content 

* All written content, including the Menu, is original content written by the developer. 
* All media included on the website is for educational purpose only.


 ## Credits:
 
 * To ensure my CSS code was formatted correctly, I ran it through a formatter which can be found here: [CSS Code Formatter](https://www.freeformatter.com/css-beautifier.html#ad-output)
 * To ensure my HTML code was formatted correctly, I ran it through a formatter which can be found here: [HTML Code Formatter](https://www.freeformatter.com/html-formatter.html)

### Content 

### Code 

* As a go to reasource hub I used [W3S Schools](https://www.w3schools.com/default.asp).
* To create my responsive picture examples I used [ami.responsive](http://ami.responsivedesign.is).
* When stuck on a development issue, I checked [Stackoverflow](https://stackoverflow.com) to see if other developers had the same problems.

### Media 

### Acknowledgments 
