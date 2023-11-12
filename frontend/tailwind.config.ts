import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#574AE8',
        dark10: '#1A202C',
        dark20: '#717171',
        dark30: '#F3F5F7',
        blue_gradient: "#3EA1DB"
      }
    },
  },
  plugins: [],
}
export default config
