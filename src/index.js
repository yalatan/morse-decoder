const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        
let newarr = expr.match(/.{1,10}/g);
for(let i=0; i<newarr.length; i++){
	newarr[i] = newarr[i].match(/.{1,2}/g);
	for(let q=0; q <newarr[i].length; q++){
		
		if(newarr[i][q] == "00"){
			newarr[i][q] = "";
		}
		if(newarr[i][q] == "10"){
			newarr[i][q] = ".";
		}
		if(newarr[i][q] == "11"){
			newarr[i][q] = "-";
		};
		
	};
	newarr[i] = newarr[i].join("");
	for (var key in MORSE_TABLE) {
  if(key == newarr[i]){
  newarr[i] = MORSE_TABLE[key];
  }
}
};

newarr = newarr.join("").split("**********").join(" ");
return newarr;
}

module.exports = {
    decode
}