import Link from 'next/link';
import { use, useState } from 'react';

interface State {
  text: string;
  value: number;
  dateTime: string;
}

export default function Reducer() {
  const [state, setState] = useState<State>({
    text: 'My String',
    value: 10,
    dateTime: new Date().toISOString(),
  });

  return (
    <>
      <div>
        <h1>Reducer State</h1>
        <div className='flex-wrap'>
          <button
            onClick={() => {
              state.dateTime = new Date().toISOString();

              setState({ ...state });
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
