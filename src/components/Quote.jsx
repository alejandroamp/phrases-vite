import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState([]);

    const getQuote = async () => {
        try {
          const url = "https://los-simpsons-quotes.herokuapp.com/v1/quotes";
          const response = await fetch(url);
          const resultado = await response.json();
          console.log(resultado);
          setQuote(resultado[0]);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getQuote();
      }
      , []);

  return (
    <div className="flex justify-center h-[100vh] items-center bg-blue-300">
      <div id="quote-box" className="font-['Raleway'] rounded-lg relative max-w-md px-10 py-12 table bg-yellow-500">
        <p id="text" className="text-3xl font-semibold italic text-center h-auto clear-both ">"{quote.quote}"</p>
        <p id="author" className="text-xl h-auto clear-both pt-5 text-right">{quote.author}</p>
        <button className="w-22 m-auto block rounded-md border-none 
        text-white bg-blue-300 outline-none text-md px-2 py-4 mt-8 opacity-100 float-right hover:bg-blue-800" id="new-quote" onClick={getQuote}>Click Me!</button>
        <button className="w12 m-auto block rounded-md border-none 
        text-white bg-blue-300 outline-none text-md px-2 py-4 mt-8 opacity-100 float-left hover:bg-blue-800"><a id="tweet-quote" 
        href={"https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+quote.quote+" - "+quote.author} target="_blank">Tweet!</a></button>
        <button className="w12 m-auto block rounded-md border-none 
        text-white bg-blue-300 outline-none text-md px-2 py-4 mt-8 ml-2 opacity-100 float-left hover:bg-blue-800">
          <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+quote.quote+" - "+quote.author} target="_blank">Tumblr!</a></button>
      </div>
    </div>
  );
};

export default Quote;
