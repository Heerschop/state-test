import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StatePage() {
  const [state, updateState] = useState([
    {
      text: 'My text 1',
      value: 'My value 1',
    },
    {
      text: 'My text 2',
      value: 'My value 2',
    },
  ]);

  useEffect(() => {
    console.log('effect');
  }, [state]);

  console.log('render');

  return (
    <>
      <div>
        <h1>Use State</h1>
        <div className='flex-wrap'>
          <button
            onClick={() => {
              updateState((state) => {
                const snapshot = JSON.stringify(state);

                state[1].text = 'My text 2 (Update)';

                if (snapshot !== JSON.stringify(state)) {
                  return [...state];
                } else {
                  return state;
                }
              });
            }}
          >
            Update
          </button>
        </div>
        <textarea readOnly rows={10} cols={50} value={JSON.stringify(state, null, 2)}></textarea>
        <Link href={'/'}>Back</Link>
      </div>
    </>
  );
}
