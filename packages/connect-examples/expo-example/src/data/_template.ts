import { type PlaygroundProps } from '../components/Playground';

const api: PlaygroundProps[] = [
  {
    method: 'algoGetAddress',

    presupposes: [
      {
        title: 'Get address',
        value: {
          path: "m/44'/283'/0'/0'/0'",
          showOnUnionKey: false,
        },
      },
      {
        title: 'Batch Get Address',
        value: {
          bundle: [
            {
              path: "m/44'/283'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              path: "m/44'/283'/1'/0'/0'",
              showOnUnionKey: false,
            },
            {
              path: "m/44'/283'/2'/0'/0'",
              showOnUnionKey: false,
            },
          ],
        },
      },
    ],
  },
];

export default api;
