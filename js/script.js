/* Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator, Submitted by G.Toro, 6/2019 */

//This array contains the data of the quotes, sources, years if any, and quote type.
var quotes = [{
        quote: "Run often.Run long.But never outrun your joy of running.",
        source: "Julie Isphording, former Olympic runner",
        year: "1961-Present",
        type: " running, motivational"
    },
    {
        quote: "Never underestimate the power of dreams and the influence of the human spirit. We are all the same in this notion. The potential for greatness lives within each of us.",
        source: "Wilma Rudolph, Three-Time Olympic Gold Champ",
        year: "1940-1994",
        type: "inspirational"
    },
    {
        quote: "A race is a work of art that people can look at and be affected in as many ways theyre capable of understanding.",
        source: " Steve Prefontaine, Seven World Records",
        year: "1951-1975",
        type: "inspirational, sports"
    },
    {
        quote: "Don't dream of winning, train for it!",
        source: " Mo Farah, Olympic long-distance runner",
        year: "1983-Present",
        type: "running, motivational"
    },
    {
        quote: "When anyone tells me I can 't do anything, I'm just not listening anymore.",
        source: "Florence Griffith Joyner, Three-Time Gold Olympian",
        year: " ", //1959-1998
        type: " "
    }
];

//Random quote generator function--using the length of the array of to generate a random quote, then returning the quote.
function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

//this function prints the quote onto the page
function printQuote() {
    var currentQuote = getRandomQuote();
    //this line declares a local variable: html
    var html = "<p class='quote'> " + currentQuote.quote + "</p>";
    //this line adds the source property to the local html variable---adds to string
    html += "<p class='source'> " + currentQuote.source + "</p>";
    //this statement verifies if there is a type property and---adds it to the string
    if ("type" in currentQuote) {
        html += "<span class='type'>" + currentQuote.type + "</span>";
    }
    //this statement verifies if there is a year property and---adds it to the string
    if ("year" in currentQuote) {
        html += "<span class='year'>" + currentQuote.year + "</span>";
    }
    //this line of code completes the html string
    document.getElementById("quote-box").innerHTML = html;
    //this line completes the clickable button
    document.getElementById("loadQuote");
};
//this loads a randomly generated quote each time the button is clicked---no changes made to the code below, per instructions. 
{
    document.getElementById('loadQuote').addEventListener("click", printQuote);
};
