let btnGen = document.querySelector("#generate");
let quoteel = document.querySelector("#quote");
let authorel = document.querySelector("#author");

btnGen.addEventListener("click", async () => {
  let { quote, author } = await getQuote();
  quoteel.innerText = quote;
  authorel.innerText = `- ${author}`;
});


async function getQuote(){
  const res = await fetch("https://quoteslate.vercel.app/api/quotes/random");
  const data = await res.json();
  // data might be an array or object depending on endpoint—check docs
  return {
    quote: data[0]?.quote ?? data.quote,
    author: data[0]?.author ?? data.author
  };
}
