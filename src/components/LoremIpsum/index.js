import React, { useState, useRef, useEffect } from "react";
import classes from "./index.module.css";
import { BiSolidCopy } from "react-icons/bi";
import { RxText } from "react-icons/rx";

const LoremIpsumGenerator = () => {
  const [generate, setGenerate] = useState(false);
  const [lorem, setLorem] = useState("");
  const [numWords, setWords] = useState(3);
  const [numParagraphs, setParagraphs] = useState(1);

  const capitalizeFirstLetter = (string) => {
    string = string.toLowerCase();

    let words = string.split(" ");

    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }

    let result = words.join(" ");

    return result;
  };

  const divRef = useRef(null);

  function copyToClipboard() {
    const textToCopy = divRef.current.innerHTML;

    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  useEffect(() => {
    const generateLoremIpsum = () => {
      const words = [
        "Lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "consectetur",
        "adipiscing",
        "elit",
        "sed",
        "do",
        "eiusmod",
        "tempor",
        "incididunt",
        "ut",
        "labore",
        "et",
        "dolore",
        "magna",
        "aliqua",
        "enim",
        "minim",
        "veniam",
        "quis",
        "nostrud",
        "exercitation",
        "laboris",
        "aliquip",
        "commodo",
        "consequat",
        "duis",
        "voluptate",
        "esse",
        "cillum",
        "fugiat",
      ];

      const loremIpsum = [];

      for (let i = 0; i < numParagraphs; i++) {
        const sentence = [];

        for (let j = 0; j < numWords; j++) {
          const randomWord = words[Math.floor(Math.random() * words.length)];
          sentence.push(randomWord);
        }

        loremIpsum.push(sentence.join(" "));
      }

      if (numParagraphs === 1) {
        return loremIpsum.join(" ");
      } else {
        return loremIpsum.map((sentence, index) => (
          <p key={index}>
            {sentence.charAt(0).toUpperCase() + sentence.slice(1)}.
          </p>
        ));
      }
    };

    let text = generateLoremIpsum();

    if (numParagraphs === 1) {
      text = capitalizeFirstLetter(text);
      text = text + ".";
    }

    setLorem(text);
  }, [numWords, numParagraphs, generate]);

  const handleGenerate = () => {
    setGenerate(!generate);
  };

  const handleWords = (event) => {
    setWords(event.target.value);
  };

  const handleParagraphs = (event) => {
    setParagraphs(event.target.value);
  };

  const optionsWords = [];
  for (let i = 1; i <= 100; i++) {
    optionsWords.push(i);
  }

  const optionsParagraphs = [];
  for (let i = 1; i <= 20; i++) {
    optionsParagraphs.push(i);
  }

  return (
    <>
      <div className={classes.description}>
        <div className={classes.descriptionInt}>
          <h1>“Lorem Ipsum”</h1>
          is dummy text often used in the printing and graphic design and
          development industries as a filler for text space in a layout or
          template. Select the number of words and paragraphs and generate the
          text, ideal for filling demos, or during the design phase.
        </div>
      </div>
      <div className={classes.page}>
        <div className={classes.selectContainer}>
          <div className={classes.selectContainerInt}>
            Words
            <select
              onChange={handleWords}
              name="words"
              value={numWords}
              className={classes.select}
            >
              {optionsWords.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.selectContainerInt}>
            Paragraph
            <select
              onChange={handleParagraphs}
              name="paragraph"
              value={numParagraphs}
              className={classes.select}
            >
              {optionsParagraphs.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes.copyButtonContainer}>
          <button onClick={handleGenerate} className={classes.copyButton}>
            <RxText />
            Generate
          </button>
          <button onClick={copyToClipboard} className={classes.copyButton}>
            <BiSolidCopy />
            Copy
          </button>
        </div>
        <div ref={divRef} className={classes.textContainer}>
          {lorem}
        </div>
      </div>
    </>
  );
};

export default LoremIpsumGenerator;
