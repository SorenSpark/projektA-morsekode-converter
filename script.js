// MORSE-alfabet (A-Z og 0-9).
const morse = {
  'A':'.-',   'B':'-...', 'C':'-.-.', 'D':'-..',  'E':'.',
  'F':'..-.', 'G':'--.',  'H':'....', 'I':'..',   'J':'.---',
  'K':'-.-',  'L':'.-..', 'M':'--',   'N':'-.',   'O':'---',
  'P':'.--.', 'Q':'--.-', 'R':'.-.',  'S':'...',  'T':'-',
  'U':'..-',  'V':'...-', 'W':'.--',  'X':'-..-', 'Y':'-.--',
  'Z':'--..', 'Æ':'.-.-', 'Ø':'---.', 'Å':'.--.-',
  '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-',
  '5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'
};

// Hent elementer
const inputEl = document.getElementById('textInput');
const btn = document.getElementById('translateBtn');
const outputEl = document.getElementById('output');

// Funktion til at oversætte tekst til morsekode
function translateToMorse(text) {
    if(!text) return '';


// Trim og split i ord (et eller flere whitespace som separator)
  const words = text.trim().split(/\s+/);

  const morseWords = words.map(word => {
    // hvert tegn i ordet
    const letters = Array.from(word).map(ch => {
      const key = ch.toUpperCase();
      return morse[key] ?? '?'; // hvis ikke fundet -> '?'
    });
    // bogstaver adskilles med mellemrum
    return letters.join(' ');
  });

  // ord adskilles med " / "
  return morseWords.join(' / ');
}

// Event: klik "Oversæt"
btn.addEventListener('click', () => {
  const text = inputEl.value;
  const morse = translateToMorse(text);
  outputEl.textContent = morse || '(ingen output)';
});
