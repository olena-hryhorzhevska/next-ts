'use client';

import { useState } from 'react';

const NotesClient = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};

export default NotesClient;
