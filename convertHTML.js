// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.



function convertHTML(str) {
    const chart = {
         "&" : "&amp;",
         "<" : "&lt;",
         ">" : "&gt;",
         '"' : "&quot;",
         "'" : "&apos;"
    }
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if(chart.hasOwnProperty(str[i])) {
            newStr += chart[str[i]]
        } 
        else {
            newStr += str[i]
        }
    }
    return newStr
  }
  
  convertHTML("Dolce & Gabbana");
  // returns "Dolce &amp; Gabbana"