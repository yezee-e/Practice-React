import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

function Day() {
  const { day } = useParams();

  const words = useFetch(
    `https://my-json-server.typicode.com/yezee-e/Practice-React/words?day=${day}`
  );

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
