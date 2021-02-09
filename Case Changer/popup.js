let SentenceCase = document.getElementById('Sentence case');
let TitleCase = document.getElementById('Title case');
let Input = document.getElementById('Input');
let Output = document.getElementById('Output');
ncstring = '' //Add any exceptions in this string if required.

function copyToClipboard(text) {
  
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

SentenceCase.onclick = function(element) {
    
    TheString = toSentenceCase(Input.value) 
    console.log(TheString)
    TheString1 = TheString.charAt(0).toUpperCase()
    TheString2 = TheString.substr(1)
    Output.value = TheString1 + TheString2
    copyToClipboard(Output.value)
  };

TitleCase.onclick = function(element) {
    TheString = toTitleCase(Input.value)
    Output.value = TheString
    copyToClipboard(Output.value)
};


function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            if (ncstring.includes(txt))
            {   
                return txt
                                
            }
                
            else
            {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        }
    );
}

function toSentenceCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            if (ncstring.includes(txt))
            {   
                return txt
                                
            }
              
            else
            {
                return txt.toLowerCase();
            }
        }
    );
}
