import { useState } from 'react';
export default function Counter({ initialValue = 0, step = 5 }) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialValue);
  };
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow">
      <p>Compteur : {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
        onClick={increment}
      >
        +{step}
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-3 py-1 rounded"
        onClick={decrement}
      >
        -{step}
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-3 py-1 rounded ml-2"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
