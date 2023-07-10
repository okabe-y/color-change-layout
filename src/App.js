/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

// Function to generate random color codes.
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [boxes, setBoxes] = useState([
    { color: generateRandomColor(), style: { pcGridColumn: '1/5', pcGridRow: '1/5', spGridColumn: '1/3', spGridRow: '1/2' } },
    { color: generateRandomColor(), style: { pcGridColumn: '5/9', pcGridRow: '1/3', spGridColumn: '1/3', spGridRow: '3/4' } },
    { color: generateRandomColor(), style: { pcGridColumn: '5/7', pcGridRow: '3/5', spGridColumn: '1/2', spGridRow: '2/3' } },
    { color: generateRandomColor(), style: { pcGridColumn: '7/9', pcGridRow: '3/5', spGridColumn: '2/3', spGridRow: '2/3' } },
    { color: generateRandomColor(), style: { pcGridColumn: '1/3', pcGridRow: '5/6', spGridColumn: '1/2', spGridRow: '5/6' } },
    { color: generateRandomColor(), style: { pcGridColumn: '1/3', pcGridRow: '6/8', spGridColumn: '1/2', spGridRow: '6/7' } },
    { color: generateRandomColor(), style: { pcGridColumn: '3/7', pcGridRow: '5/8', spGridColumn: '1/3', spGridRow: '4/5' } },
    { color: generateRandomColor(), style: { pcGridColumn: '7/9', pcGridRow: '5/7', spGridColumn: '2/3', spGridRow: '5/6' } },
    { color: generateRandomColor(), style: { pcGridColumn: '7/9', pcGridRow: '7/8', spGridColumn: '2/3', spGridRow: '6/7' } },
  ]);

  // Function to randomly change the color of the box on click.
  const handleBoxClick = () => {
    const newBoxes = boxes.map((box) => ({
      ...box,
      color: generateRandomColor(),
    }));
    setBoxes(newBoxes);
  };

  const containerStyles = css`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px;
    grid-gap: 10px;

    @media (max-width: 600px) {
      grid-template-columns: 200px 200px;
      grid-template-rows: 100px 100px 100px 100px 100px 100px;
    }
  `;

  const boxStyles = (box) => css`
    background-color: ${box.color};
    cursor: pointer;
    grid-column: ${box.style.pcGridColumn};
    grid-row: ${box.style.pcGridRow};
    display: table;
    text-align: center;

    @media (max-width: 600px) {
      grid-column: ${box.style.spGridColumn};
      grid-row: ${box.style.spGridRow};
    }
  `;

  const numberStyles = css`
    display: table-cell;
    vertical-align: middle;
    color: white;
  `;

  return (
    <div css={containerStyles}>
      {boxes.map((box, index) => (
        <div
          key={index}
          css={boxStyles(box)}
          onClick={handleBoxClick}
        ><span css={numberStyles}>{index + 1}</span></div>
      ))}
    </div>
  );
};

export default App;
