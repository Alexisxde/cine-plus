import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@pages': '/src/pages',
			'@utils': '/src/utils',
			'@types': '/src/types.d.ts',
			'@api': '/api'
		}
	}
})
