import { defineConfig } from "vite";

export default defineConfig({
    base: '/TPF-Web/',
    build: {
        emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: 'index.html',
                    accueil: 'Page2.html',
                },
            },
    },
});