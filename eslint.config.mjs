import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import reactCompiler from 'eslint-plugin-react-compiler'

const config = [
  {
    ignores: ['.sst/**', 'cdk.out/**', '.next/**', 'node_modules/**', '.open-next/**'],
  },
  ...nextCoreWebVitals,
  {
    plugins: {
      'react-compiler': reactCompiler,
    },

    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
]

export default config
