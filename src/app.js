/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io", ".go.cr"];

  function domainGenerator(pronoun, adj, noun) {
    for (
      let pronounElement = 0;
      pronounElement < pronoun.length;
      pronounElement++
    ) {
      for (let adjElement = 0; adjElement < adj.length; adjElement++) {
        for (let nounElement = 0; nounElement < noun.length; nounElement++) {
          for (
            let domainElement = 0;
            domainElement < domain.length;
            domainElement++
          ) {
            console.log(
              pronoun[pronounElement] +
                adj[adjElement] +
                noun[nounElement] +
                domain[domainElement]
            );
          }
        }
      }
    }
  }
  domainGenerator(pronoun, adj, noun, domain);
};
