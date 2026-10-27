import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import reactCompiler from 'eslint-plugin-react-compiler'

const config = [
  {
    ignores: [
      '.sst/**',
      'cdk.out/**',
      '.next/**',
      'node_modules/**',
      '.open-next/**',
      'sst-env.d.ts',
      'next-env.d.ts',
    ],
  },
  ...nextCoreWebVitals,
  {
    plugins: {
      'react-compiler': reactCompiler,
    },

    rules: {
      'react-compiler/react-compiler': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              importNames: ['default'],
              message: "Import Link from '@/app/components/Link' so it drives the progress bar.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/app/components/Link.tsx'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
]

export default config
