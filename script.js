function ChangeQuote(){
    var quotes = {
        "- Steve Jobs": '"The only way to do great work is to love what you do"',
        "- Winston Churchil": '"Success is not final, failure is not fatal  It is the courage to continue that counts"',
        "- Theodore Roosevelt": '"Believe you can and you are halfway there"',
        "- Abraham Lincoln": '"In the end, it is not the years in your life that count. It is the life in your years"',
        "- Franklin D. Roosevelt": '"The only limit to our realization of tomorrow will be our doubts of today"',
        "- John Lennon": '"Life is what happens when you are busy making other plans"',
        "- Dalai Lama": '"Happiness is not something ready-made. It comes from your own actions"',
        "-  Wayne Gretzky": '"You miss 100% of the shots you don nott take"',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()* authors.length )]
 
      var quote = quotes[author]


      document.getElementById("quote").innerHTML = quote;
      document.getElementById("author").innerHTML = author;

}