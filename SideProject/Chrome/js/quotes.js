const quotes = [
    {
        quote : "Hello1",
        author : "woojinLim" 
    },
    {
        quote : "Hello2",
        author : "woojinLim" 
    },
    {
        quote : "Hello3",
        author : "woojinLim" 
    },
    {
        quote : "Hello4",
        author : "woojinLim" 
    },
    {
        quote : "Hello5",
        author : "woojinLim" 
    },
    {
        quote : "Hello6",
        author : "woojinLim" 
    },
    {
        quote : "Hello7",
        author : "woojinLim" 
    },
    {
        quote : "Hello8",
        author : "woojinLim" 
    },
    {
        quote : "Hello9",
        author : "woojinLim" 
    },
    {
        quote : "Hello10",
        author : "woojinLim" 
    }
];


const quote  = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length, 0)].quote;
const todayAuthor = quotes[Math.floor(Math.random() * quotes.length, 0)].author;

quote.innerText = todayQuote;   
author.innerText = todayAuthor;



