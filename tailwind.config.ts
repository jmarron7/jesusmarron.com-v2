import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#c8c9c9', // Base color for text in prose
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
            fontSize: '1rem', // Base font size

            h1: {
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '2.25rem', // Adjust H1 font size
              fontFamily: 'inherit',
            },
            h2: {
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '1.875rem', // Adjust H2 font size
              fontFamily: 'inherit',
            },
            h3: {
              color: '#ffffff',
              fontWeight: '500',
              fontSize: '1.5rem', // Adjust H3 font size
              fontFamily: 'inherit',
            },
            h4: {
              color: '#ffffff',
              fontWeight: '500',
              fontSize: '1.25rem', // Adjust H3 font size
              fontFamily: 'inherit',
            },
            h5: {
              color: '#ffffff',
              fontWeight: '500',
              fontSize: '1.125rem', // Adjust H3 font size
              fontFamily: 'inherit',
            },
            h6: {
              color: '#ffffff',
              fontWeight: '500',
              fontSize: '1rem', // Adjust H3 font size
              fontFamily: 'inherit',
            },
            p: {
              fontSize: '1rem', // Adjust paragraph font size
              fontFamily: 'inherit',
            },
            a: {
              color: '#ffffff',
              '&:hover': {
                color: '#68cc58',
              },
              fontWeight: '600',
            },
            code: {
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#D3C6AA',
              backgroundColor: '#2d353b',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
            },
            strong: {
              color: '#ffffff',
              fontWeight: '700',
            },
            blockquote: {
              color: '#c8c9c9',
              fontSize: '1.125rem', 
              fontStyle: 'italic',
              borderLeftColor: '#cbd5e0',
            },
          },
        },
      },
      colors: {
        grey: {
          50: 'rgb(239, 241, 244)',
          100: 'rgb(234, 237, 240)',
          200: 'rgb(229, 232, 236)',
          300: 'rgb(213, 218, 225)',
          400: 'rgb(181, 191, 202)',
          500: 'rgb(149, 163, 179)',
          600: 'rgb(134, 147, 161)',
          700: 'rgb(112, 122, 134)',
          800: 'rgb(89, 98, 107)',
          900: 'rgb(73, 80, 88)',
        },
        blue: {
          50: 'rgb(228, 242, 255)',
          100: 'rgb(220, 237, 254)',
          200: 'rgb(211, 233, 254)',
          300: 'rgb(184, 220, 254)',
          400: 'rgb(131, 193, 253)',
          500: 'rgb(78, 167, 252)',
          600: 'rgb(70, 150, 227)',
          700: 'rgb(59, 125, 189)',
          800: 'rgb(47, 100, 151)',
          900: 'rgb(38, 82, 123)',
        },
        purple: {
          50: 'rgb(231, 233, 248)',
          100: 'rgb(223, 225, 246)',
          200: 'rgb(215, 218, 244)',
          300: 'rgb(191, 195, 237)',
          400: 'rgb(142, 151, 224)',
          500: 'rgb(94, 106, 210)',
          600: 'rgb(85, 95, 189)',
          700: 'rgb(71, 80, 158)',
          800: 'rgb(56, 64, 126)',
          900: 'rgb(46, 52, 103)',
        },
        green: {
          50: 'rgb(232, 247, 230)',
          100: 'rgb(225, 245, 222)',
          200: 'rgb(217, 242, 213)',
          300: 'rgb(195, 235, 188)',
          400: 'rgb(149, 219, 138)',
          500: 'rgb(104, 204, 88)',
          600: 'rgb(94, 184, 79)',
          700: 'rgb(78, 153, 66)',
          800: 'rgb(62, 122, 53)',
          900: 'rgb(51, 100, 43)',
        },
        yellow: {
          50: 'rgb(249, 243, 227)',
          100: 'rgb(246, 239, 218)',
          200: 'rgb(244, 236, 208)',
          300: 'rgb(238, 224, 180)',
          400: 'rgb(225, 200, 124)',
          500: 'rgb(212, 177, 68)',
          600: 'rgb(191, 159, 61)',
          700: 'rgb(159, 133, 51)',
          800: 'rgb(127, 106, 41)',
          900: 'rgb(104, 87, 33)',
        },
        red: {
          50: 'rgb(252, 230, 230)',
          100: 'rgb(251, 221, 221)',
          200: 'rgb(250, 213, 213)',
          300: 'rgb(247, 188, 188)',
          400: 'rgb(241, 137, 137)',
          500: 'rgb(235, 87, 87)',
          600: 'rgb(212, 78, 78)',
          700: 'rgb(176, 65, 65)',
          800: 'rgb(141, 52, 52)',
          900: 'rgb(115, 43, 43)',
        },
        surface: {
          50: 'rgb(222, 222, 223)',
          100: 'rgb(211, 212, 212)',
          200: 'rgb(200, 201, 201)',
          300: 'rgb(167, 168, 169)',
          400: 'rgb(102, 103, 105)',
          500: 'rgb(36, 38, 40)',
          600: 'rgb(32, 34, 36)',
          700: 'rgb(27, 29, 30)',
          800: 'rgb(22, 23, 24)',
          900: 'rgb(18, 19, 20)',
        },
        on: {
          grey: 'rgb(0, 0, 0)',
          blue: 'rgb(0, 0, 0)',
          purple: 'rgb(255, 255, 255)',
          green: 'rgb(0, 0, 0)',
          yellow: 'rgb(0, 0, 0)',
          red: 'rgb(255, 255, 255)',
          surface: 'rgb(255, 255, 255)',
        },
      },
      fontFamily: {
        base: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        heading: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      borderRadius: {
        base: '12px',
        container: '12px',
      },
    },
  },
	plugins: [typography, aspectRatio]
} satisfies Config;
