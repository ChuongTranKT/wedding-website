import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      Splash: ['Splash', 'cursive'],
      Bonheur: ['Bonheur', 'cursive'],
      Royale: ['Royale', 'cursive'],
    },
    // colors: {
    //   fuchsia: {
    //     F0B: "#F0BCE3",
    //     EBA: "#EBA1DE",
    //     E38: "#E382D3",
    //     C82: "#C821AC",
    //     B70: "#B70B9D",
    //     A01: "#A01887",
    //     792: "#792966",
    //   },
    // },
  },
  plugins: [],
}
export default config
