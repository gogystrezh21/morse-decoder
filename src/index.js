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
	let decodedText = '';

	for (let i = 0; i < expr.length; i = i + 10) {
		const letterSpace = expr.slice(i, i + 10);
		let letterMorse = '';
		if (letterSpace== '**********') {
			decodedText += ' ';
			continue;
		}
		for (let j = 9; j > 0; j = j - 2) {
			const morseSign = letterSpace[j - 1] + letterSpace[j];
			if (morseSign == '00') {
				break;
			} else if (morseSign == '10') {
				letterMorse = `.${letterMorse}`;
			} else if (morseSign == '11') {
				letterMorse = `-${letterMorse}`;
			}
		}
		decodedText = decodedText + MORSE_TABLE[letterMorse];
	}
	return decodedText;
}
	
module.exports = {
    decode
}