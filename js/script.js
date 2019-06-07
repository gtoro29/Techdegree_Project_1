/* Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator, Submitted by G.Toro, 6/2019 */


//Array contains quote data
var quotes = [{
        quote: "Run often. Run long .But never outrun your joy of running.",
        source: "Julie Isphording, former Olympic runner ",
        year: "1961-Present",
        citation: " ",
        type: "running, motivational"
    },
    {
        quote: "I'm more than an entrepreneur. So I just leave it blank or self-employed.",
        source: "Oprah Winfrey ",
        year: "1940-1994",
        citation: "Spech at Spelman College",
        type: "inspirational"
    },
    {
        quote: "To give anything else than your best is to sacrifice the gift.",
        source: " Steve Prefontaine, Seven World Records ",
        year: "1951-1975",
        citation: " ",
        type: "inspirational, sports"
    },
    {
        quote: "Don't dream of winning, train for it!",
        source: " Mo Farah, Olympic long-distance runner ",
        year: "1983-Present",
        citation: " ",
        type: "running, motivational"
    },
    {
        quote: "When anyone tells me I can 't do anything, I'm just not listening anymore.",
        source: "Florence Griffith Joyner, Three-Time Gold Olympian ",
        year: " ", //1959-1998 
        type: " "
    }
];

//extra credit---function that adds a timer to the page changing colors and quotes every 6s.
function startTimer() {
    let timer = setInterval(printQuote, 6000);
}
//calling the function
startTimer();

//Random quote generator function--uses the length of the array of quotes to generate a random quote, then it returns it
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}
//etra credit---dunction that adds a random color change when quotes change
function getRandomColor() {
    var randomColor;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return randomColor;
}

//this function prints the quote onto the page
function printQuote() {
    var currentQuote = getRandomQuote();
    //this line declares a local variable: html
    let html = "<p class='quote'> " + currentQuote.quote + "</p>";
    //this line adds the source property to html---adds to the string
    html += "<p class='source'> " + currentQuote.source + "</p>";
    //this statement verifies if there is a type property and---adds it to the string
    if ("type" in currentQuote) {
        html += "<span class='type'>" + currentQuote.type + "</span>";
    }
    //this statement verifies if there is a year property and---adds it to the string
    if ("year" in currentQuote) {
        html += "<span class='year'>" + currentQuote.year + "</span>";
    }
    //this statement verifies if there is a citation property and---adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'>" + currentQuote.citation + "</span>";
    }
    //this line completes the html string
    document.getElementById("quote-box").innerHTML = html;
    //using background color function with elementID
    document.getElementById('bgcolor').style.backgroundColor = getRandomColor();
    //using clickability of button with elementID
    document.getElementById('loadQuote').addEventListener("click", printQuote);
};


/// References used:

/// MDN - https://developer.mozilla.org/en-US/
/// Google - https://www.google.com/
/// Teamtreehouse Q&A RGB color generator function - https://teamtreehouse.com/community/my-code-for-this-challenge
/// Teamtreehouse Create a Timer in JS - https://teamtreehouse.com/library/create-a-timer-in-javascript
/// Teamtreehouse Project 1 Study Guide PDF - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view
/// Teamtreehouse Project 1 Instructions and information - https://teamtreehouse.com/projects/a-random-quote-generator
/// Slack Channel Treehouse Fullstack Javascript #review-my-project
