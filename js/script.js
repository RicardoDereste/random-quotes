const quotes = [
    {
        quote: "Persistence is the path to success.",
        author: "Charles Chaplin",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Success is the sum of small efforts repeated day after day.",
        author: "Robert Collier",
    },
    {
        quote:
            "Failure is an opportunity to start over with more experience..",
        author: "Henry Ford",
    },
    {
        quote: "Don't wait for opportunities, create your own.",
        author: "Unknown author",
    },
    {
        quote:
            "True success is not financial success, but success in helping others..",
        author: "Zig Ziglar",
    },
    {
        quote:
            "Success is not final, failure is not fatal: what matters is having the courage to continue.",
        author: "Winston Churchill",
    },
    {
        quote:
            "Success consists of going from failure to failure without losing enthusiasm..",
        author: "Winston Churchill",
    },
    {
        quote: "Believe in yourself and everything else will come naturally.",
        author: "Elon Musk",
    },
    {
        quote:
            "Failure doesn't mean you're not good enough, it means you need to try harder..",
        author: "Unknown author",
    },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
    quoteAuthor.textContent = "- " + quotes[index].author;
}

quoteBtn.addEventListener("click", getQuote);