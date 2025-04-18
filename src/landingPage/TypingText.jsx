import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../landingPageStyle/TypingText.module.css';

function TypingText({words, typingSpeed = 100, deletingSpeed = 40, pauseTime = 1000}) {
    const [text, setText] = React.useState('');
    const [wordIndex, setWordIndex] = React.useState(0);
    const [isDelete, setIsDelete] = React.useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];
        let timeout;

        if(isDelete) {
            timeout = setTimeout(() => {
                setText(prev => prev.slice(0, -1));
            }, deletingSpeed);
        } else{
            timeout = setTimeout(() => {
                setText(prev => currentWord.slice(0, prev.length + 1));
            }, typingSpeed);
        }

        if (!isDelete && text === currentWord) {
            timeout = setTimeout(() => setIsDelete(true), pauseTime);
        }

        if (isDelete && text === "") {
            setIsDelete(false);
            setWordIndex(prev => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDelete, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <div className={style.typingContainer}>
            <span className={style.typingText}>{text}</span>
            <span className={style.cursor}>|</span>
        </div>
    );
}

export default TypingText;