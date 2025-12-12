import { defineConfig } from "vite";

export default defineConfig({
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