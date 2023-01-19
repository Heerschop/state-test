import Link from 'next/link';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

export default function StatePage() {
  const [state, updateState] = useImmer([
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
        <h1>Use Immer</h1>
        <div className='flex-wrap'>
          <button
            onClick={() => {
              updateState((state) => {
                state[1].text = 'My text 2 (Update)';
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
