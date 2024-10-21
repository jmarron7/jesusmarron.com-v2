// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const jm7_theme: CustomThemeConfig = {
	name: 'jm7_theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #95a3b3 
		"--color-primary-50": "239 241 244", // #eff1f4
		"--color-primary-100": "234 237 240", // #eaedf0
		"--color-primary-200": "229 232 236", // #e5e8ec
		"--color-primary-300": "213 218 225", // #d5dae1
		"--color-primary-400": "181 191 202", // #b5bfca
		"--color-primary-500": "149 163 179", // #95a3b3
		"--color-primary-600": "134 147 161", // #8693a1
		"--color-primary-700": "112 122 134", // #707a86
		"--color-primary-800": "89 98 107", // #59626b
		"--color-primary-900": "73 80 88", // #495058
		// secondary | #4ea7fc 
		"--color-secondary-50": "228 242 255", // #e4f2ff
		"--color-secondary-100": "220 237 254", // #dcedfe
		"--color-secondary-200": "211 233 254", // #d3e9fe
		"--color-secondary-300": "184 220 254", // #b8dcfe
		"--color-secondary-400": "131 193 253", // #83c1fd
		"--color-secondary-500": "78 167 252", // #4ea7fc
		"--color-secondary-600": "70 150 227", // #4696e3
		"--color-secondary-700": "59 125 189", // #3b7dbd
		"--color-secondary-800": "47 100 151", // #2f6497
		"--color-secondary-900": "38 82 123", // #26527b
		// tertiary | #5e6ad2 
		"--color-tertiary-50": "231 233 248", // #e7e9f8
		"--color-tertiary-100": "223 225 246", // #dfe1f6
		"--color-tertiary-200": "215 218 244", // #d7daf4
		"--color-tertiary-300": "191 195 237", // #bfc3ed
		"--color-tertiary-400": "142 151 224", // #8e97e0
		"--color-tertiary-500": "94 106 210", // #5e6ad2
		"--color-tertiary-600": "85 95 189", // #555fbd
		"--color-tertiary-700": "71 80 158", // #47509e
		"--color-tertiary-800": "56 64 126", // #38407e
		"--color-tertiary-900": "46 52 103", // #2e3467
		// success | #68cc58 
		"--color-success-50": "232 247 230", // #e8f7e6
		"--color-success-100": "225 245 222", // #e1f5de
		"--color-success-200": "217 242 213", // #d9f2d5
		"--color-success-300": "195 235 188", // #c3ebbc
		"--color-success-400": "149 219 138", // #95db8a
		"--color-success-500": "104 204 88", // #68cc58
		"--color-success-600": "94 184 79", // #5eb84f
		"--color-success-700": "78 153 66", // #4e9942
		"--color-success-800": "62 122 53", // #3e7a35
		"--color-success-900": "51 100 43", // #33642b
		// warning | #d4b144 
		"--color-warning-50": "249 243 227", // #f9f3e3
		"--color-warning-100": "246 239 218", // #f6efda
		"--color-warning-200": "244 236 208", // #f4ecd0
		"--color-warning-300": "238 224 180", // #eee0b4
		"--color-warning-400": "225 200 124", // #e1c87c
		"--color-warning-500": "212 177 68", // #d4b144
		"--color-warning-600": "191 159 61", // #bf9f3d
		"--color-warning-700": "159 133 51", // #9f8533
		"--color-warning-800": "127 106 41", // #7f6a29
		"--color-warning-900": "104 87 33", // #685721
		// error | #eb5757 
		"--color-error-50": "252 230 230", // #fce6e6
		"--color-error-100": "251 221 221", // #fbdddd
		"--color-error-200": "250 213 213", // #fad5d5
		"--color-error-300": "247 188 188", // #f7bcbc
		"--color-error-400": "241 137 137", // #f18989
		"--color-error-500": "235 87 87", // #eb5757
		"--color-error-600": "212 78 78", // #d44e4e
		"--color-error-700": "176 65 65", // #b04141
		"--color-error-800": "141 52 52", // #8d3434
		"--color-error-900": "115 43 43", // #732b2b
		// surface | #242628 
		"--color-surface-50": "222 222 223", // #dededf
		"--color-surface-100": "211 212 212", // #d3d4d4
		"--color-surface-200": "200 201 201", // #c8c9c9
		"--color-surface-300": "167 168 169", // #a7a8a9
		"--color-surface-400": "102 103 105", // #666769
		"--color-surface-500": "36 38 40", // #242628
		"--color-surface-600": "32 34 36", // #202224
		"--color-surface-700": "27 29 30", // #1b1d1e
		"--color-surface-800": "22 23 24", // #161718
		"--color-surface-900": "18 19 20", // #121314
	}
}