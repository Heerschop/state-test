import Link from 'next/link';
import { useState } from 'react';

interface State {
  text?: string;
  value?: number;
  dateTime?: string;
}

function getDateTime(): string {
  return new Date(Math.round(Date.now() / 10000) * 10000).toISOString();
}

export default function StatePage() {
  const [state, setState] = useState<State>({});

  console.log('Page render');
  return (
    <>
      <div>
        <h1>Use State</h1>
        <div className='flex-wrap'>
          <button
            onClick={() => {
              const snapshot = JSON.stringify(state);

              state.text = 'My Text';
              state.value = 10;
              state.dateTime = getDateTime();

              if (snapshot !== JSON.stringify(state)) {
                setState({ ...state });
              }
            }}
          >
            Set Text
          </button>
        </div>
        <textarea readOnly rows={8} cols={50} value={JSON.stringify(state, null, 2)}></textarea>
        <Link href={'/'}>Back</Link>
      </div>
    </>
  );
}
