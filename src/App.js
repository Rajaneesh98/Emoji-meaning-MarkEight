import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🧗": "Person Climbing",
  "🏇": "Horse Riding",
  "🚣": "RowBoat",
  "🙈": "See-No_evil",
  "🥭": "Tropical Living"
};

var emojiList = Object.keys(emojiDictionary);
console.log(emojiList);

export default function App() {
  var [state, updateState] = useState("you will know the meaning of emoji");
  var [inputEmoji, updateInputEmoji] = useState("");

  function updateStateWithEmoji(event) {
    var emoji = event.target.value;

    updateInputEmoji(emoji);
    var emojiMean = emojiDictionary[emoji];
    //console.log(event.target.value)
    if (emojiMean === undefined) {
      updateState("This emoji is not in our Database");
    } else {
      updateState(emojiMean);
    }
  }

  function findEmoji(emoji) {
    console.log(emoji);

    var emojiMeanBytClick = emojiDictionary[emoji];
    updateState(emojiMeanBytClick);
  }

  return (
    <div className="App">
      <h1> Lets Know about Emoji</h1>
      <input
        placeholder="give your emoji here"
        className="input-el"
        onChange={updateStateWithEmoji}
      />
      <div className="input-emoji">{inputEmoji}</div>
      <div className="emojiMean">{state}</div>
      {emojiList.map(function (emoji) {
        return (
          <li
            className="emoji"
            key={emoji}
            onClick={function () {
              findEmoji(emoji);
            }}
          >
            {emoji}
          </li>
        );
      })}
    </div>
  );
}
