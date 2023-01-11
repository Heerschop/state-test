import Link from 'next/link';
import { useReducer } from 'react';

interface State {
  text?: string;
  value?: number;
  dateTime?: string;
}

function getDateTime(): string {
  return new Date(Math.round(Date.now() / 10000) * 10000).toISOString();
}

function reducer(state: State, action: string): State {
  state.text = 'My Text';
  state.value = 10;
  state.dateTime = getDateTime();

  return state;
}

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, {});

  console.log('Page render');
  return (
    <>
      <div>
        <h1>Use State</h1>
        <div className='flex-wrap'>
          <button
            onClick={() => {
              dispatch('');
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
