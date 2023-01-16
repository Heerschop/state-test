import Link from 'next/link';
import { useEffect, useReducer } from 'react';

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

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    console.log('effect:', state);
  }, [state]);

  console.log('render:', state);

  return (
    <>
      <div>
        <h1>Use Reducer</h1>
        <div className='flex-wrap'>
          <button onClick={() => dispatch({ type: 'date' })}>Date</button>
          <button onClick={() => dispatch({ type: 'value' })}>Value</button>
          <button onClick={() => dispatch({ type: 'text' })}>Text</button>
        </div>
        <textarea readOnly rows={8} cols={50} value={JSON.stringify(state, null, 2)}></textarea>
        <Link href={'/'}>Back</Link>
      </div>
    </>
  );
}
