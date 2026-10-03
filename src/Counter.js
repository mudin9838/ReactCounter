// Task Prompt
// Task: You are given a simple Counter component.

// Goal:

// Fix the Increment and Decrement buttons so they change the count state.

// Make sure the count never goes below 0.

// Display a list of previous count values in the History section using the history array.

// Fix the list key issue.

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleIncrement = () => {
    // BUG 1: Button click does not increase count
    // BUG 2: Should also record the new count into the history array
  };

  const handleDecrement = () => {
    // BUG 3: Count shouldn't go below 0
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '300px' }}>
      <h2>Counter: {count}</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button onClick={handleIncrement}>+ Increase</button>
        <button onClick={handleDecrement}>- Decrease</button>
      </div>

      <h3>History Log</h3>
      <ul>
        {/* BUG 4: History list is not rendered */}
        {/* BUG 5: Need proper unique keys when rendered */}
      </ul>
    </div>
  );
}
