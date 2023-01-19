import Link from 'next/link';
import { useEffect } from 'react';
import { create } from 'zustand';

interface IData {
  text?: string;
  value?: string;
}

interface IState {
  data: IData[];
  update: () => void;
}

const useStore = create<IState>((set) => ({
  data: [
    {
      text: 'My text 1',
      value: 'My value 1',
    },
    {
      text: 'My text 2',
      value: 'My value 2',
    },
  ],
  update: () =>
    set((state) => {
      state.data[1].text = 'My text 2 (Update)';

      return {
        ...state,
        ...{
          data: [...state.data],
        },
      };
    }),
}));

export default function StatePage() {
  const store = useStore((state) => state.data);
  const update = useStore((state) => state.update);

  useEffect(() => {
    console.log('effect');
  }, [store]);

  console.log('render');

  return (
    <>
      <div>
        <h1>Use Zustand</h1>
        <div className='flex-wrap'>
          <button
            onClick={() => {
              update();
            }}
          >
            Update
          </button>
        </div>
        <textarea readOnly rows={10} cols={50} value={JSON.stringify(store, null, 2)}></textarea>
        <Link href={'/'}>Back</Link>
      </div>
    </>
  );
}
