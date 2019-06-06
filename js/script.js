/* Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator, Submitted by G.Toro, 6/2019 */

//This array has five objects, each object contains four properties: quote, source, year, and type.

var quotes = [{
        quote: "Run often.Run long.But never outrun your joy of running.",
        source: "Julie Isphording, former Olympic runner",
        year: " ",
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
        source: " Steve Prefontaine, Holder of Seven World Records",
        year: " ",
        type: "inspirational, sports"
    },
    {
        quote: "Don't dream of winning, train for it!",
        source: " Mo Farah, Olympic long-distance runner",
        year: " ",
        type: "running, motivational "
    },
    {
        quote: "When anyone tells me I can 't do anything, I'm just not listening anymore.",
        source: "Florence Griffith Joyner, Three-Time Gold Olympian",
        year: " ",
        type: "inspirational, determination"
    }
];
//This prints the quotes array into the console
console.log(quotes);



//Random quote generator function--uses the length of the array of quotes to generate a random quote, then it returns this random quote
function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}



//this function prints the random quote onto the page
function printQuote() {
    var currentQuote = getRandomQuote();
    var html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;

    document.getElementById("quote-box").innerHTML = html;
    document.getElementById("loadQuote");
}

//this loads a randomly generated quote each time the button is clicked---no changes made to the code below, per instructions. 
{
    document.getElementById('loadQuote').addEventListener("click", printQuote);

};