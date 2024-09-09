import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const calculation = eval(input); 
      setResult(calculation);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={{ width: '400px', margin: '100px auto', textAlign: 'center' }}>
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly style={{ width: '100%', marginBottom: '10px' }} />
      <div style={{ marginBottom: '20px', height: '30px', fontSize: '20px' }}>{result}</div>
      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button onClick={clearInput} style={{ width: '100%' }}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
