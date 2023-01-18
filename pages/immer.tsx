import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

interface IState {
  text?: string;
  value?: number;
  dateTime?: string;
}

function getDateTime(): string {
  return new Date(Math.round(Date.now() / 10000) * 10000).toISOString();
}

type Action = { type: 'text'; value?: string } | { type: 'value'; value?: number } | { type: 'date' };

function reducer(state: IState, action: Action): void {
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

  update[action.type]?.();
}

export default function StatePage() {
  const [state, updateState] = useImmer<IState>({});

  useEffect(() => {
    console.log('effect');
  }, [state]);

  console.log('render');

  return (
    <>
      <div>
        <h1>Use Immer</h1>
        <div className='flex-wrap'>
          <button onClick={() => updateState((state) => reducer(state, { type: 'date' }))}>Date</button>
          <button onClick={() => updateState((state) => reducer(state, { type: 'value' }))}>Value</button>
          <button onClick={() => updateState((state) => reducer(state, { type: 'text' }))}>Text</button>
        </div>
        <textarea readOnly rows={8} cols={50} value={JSON.stringify(state, null, 2)}></textarea>
        <Link href={'/'}>Back</Link>
      </div>
    </>
  );
}
