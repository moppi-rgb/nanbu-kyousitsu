import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist',
        assetsDir: '',
    },
    base: '/https:moppi-rgb.github.io/nanbu-kyousitsu/',
});
