const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");
let realData = "";


const getQuotes = async () => {
    quoteBtn.classList.add("Loading"); // it adds a loading type material in the button
    quoteBtn.innerText = "Loading Quote...";  //while loading the text which will be shown is declared here.
    const api = "https://api.quotable.io/random"; 
    try {
        let data = await fetch(api);
        realData = await data.json();
        console.log(realData);
        quoteText.innerText = realData.content;
        realData.author == null
            ? (authorName.innerText = unknown) : (authorName.innerText = realData.author);
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading");
    }
    catch (error) { }
    

};

soundBtn.addEventListener("click", () => {
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request. 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);  // speak method of speechSynthesis
});

copyBtn.addEventListener("click", () => {
    //Copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
    let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}    --By ${authorName.innerText}`;
    window.open(tweeturl, "_blank");
});

quoteBtn.addEventListener("click", getQuotes);

getQuotes();


// const api = "https://type.fit/api/quotes" //this api can also be used to get quotes.




