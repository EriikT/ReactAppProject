import React from "react";
import { useState, useEffect } from 'react';

export default function DataDisplay(){
    const [randomWord, setRandomWord] = useState('');

    async function fetchWords() {
        const response = await fetch('words.txt');
        const text = await response.text();
        return text.trim().split('\n');
    }

    function getRandomWord(words) {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    useEffect(() => {
        async function updateRandomWord() {
        const words = await fetchWords();
        const newRandomWord = getRandomWord(words);
        setRandomWord(newRandomWord);
        }

        updateRandomWord();
    }, []);

    return (
      <>
        {randomWord}
      </>
    ); 
}
