import React from "react";

function TeluguKeyboard({ onKeyPress, onBackspace, onSpace, onClear }) {
  const rows = [
    ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఎ", "ఏ", "ఐ"],
    ["ఒ", "ఓ", "ఔ", "ం", "ః", "అం", "అః"],
    ["క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ"],
    ["ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న"],
    ["ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ల", "వ"],
    ["శ", "ష", "స", "హ", "ళ", "క్ష", "ఱ"],
  ];

  const vowelSigns = [
    "ా",
    "ి",
    "ీ",
    "ు",
    "ూ",
    "ృ",
    "ె",
    "ే",
    "ై",
    "ొ",
    "ో",
    "ౌ",
    "్",
  ];

  return (
    <div className="mt-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-sm">

      {/* Title */}

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-700">
          ⌨️ తెలుగు కీబోర్డ్
        </h3>

        <button
          type="button"
          onClick={onClear}
          className="text-sm text-red-600 hover:text-red-700 font-medium"
        >
          క్లియర్
        </button>
      </div>

      {/* Telugu Letters */}

      <div className="space-y-2">

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-2"
          >
            {row.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => onKeyPress(letter)}
                className="min-w-[42px] h-10 px-2 bg-white border border-gray-300 rounded-lg text-lg text-gray-800 hover:bg-blue-50 hover:border-blue-400 active:scale-95 transition"
              >
                {letter}
              </button>
            ))}
          </div>
        ))}

        {/* Vowel Signs */}

        <div className="pt-2 border-t border-gray-200">

          <p className="text-xs text-gray-500 mb-2 text-center">
            అచ్చులు / మాత్రలు
          </p>

          <div className="flex flex-wrap justify-center gap-2">

            {vowelSigns.map((sign) => (
              <button
                key={sign}
                type="button"
                onClick={() => onKeyPress(sign)}
                className="min-w-[42px] h-10 px-2 bg-blue-50 border border-blue-200 rounded-lg text-lg text-blue-700 hover:bg-blue-100 active:scale-95 transition"
              >
                {sign}
              </button>
            ))}

          </div>

        </div>

      </div>

      {/* Controls */}

      <div className="flex justify-center gap-2 mt-4">

        <button
          type="button"
          onClick={onBackspace}
          className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition"
        >
          ⌫ వెనుకకు
        </button>

        <button
          type="button"
          onClick={onSpace}
          className="px-8 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg font-medium transition"
        >
          Space
        </button>

      </div>

    </div>
  );
}

export default TeluguKeyboard;