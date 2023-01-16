import Link from 'next/link';
import { useEffect, useState } from 'react';

interface IState {
  text?: string;
  value?: number;
  dateTime?: string;
}

function getDateTime(): string {
  return new Date(Math.round(Date.now() / 10000) * 10000).toISOString();
}

type Action = { type: 'text'; value?: string } | { type: 'value'; value?: number } | { type: 'date' };

function reducer(state: IState, action: Action): IState {
  const update: { [key: string]: () => void } = {
    text: () => {
      state.text = 'My Text';
    },
    value: () => {
      state.value = 10;
    },
    date: () => {
      state.dateTime = getDateTime();
    },
  };

  const snapshot = JSON.stringify(state);
  update[action.type]?.();

  return snapshot !== JSON.stringify(state) ? { ...state } : state;
}

export default function StatePage() {
  const [state, setState] = useState<IState>({});

  useEffect(() => {
    console.log('effect');
  }, [state]);

  console.log('render');

  return (
    <>
      <div>
        <h1>Use State</h1>
        <div className='flex-wrap'>
          <button onClick={() => setState(reducer(state, { type: 'date' }))}>Date</button>
          <button onClick={() => setState(reducer(state, { type: 'value' }))}>Value</button>
          <button onClick={() => setState(reducer(state, { type: 'text' }))}>Text</button>
        </div>
        <textarea readOnly rows={8} cols={50} value={JSON.stringify(state, null, 2)}></textarea>
        <Link href={'/'}>Back</Link>
      </div>
    </>
  );
}
