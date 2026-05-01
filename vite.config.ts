import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const mimePlugin = (): Plugin => ({
  name: 'mime-plugin',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const originalSetHeader = res.setHeader;
      res.setHeader = function (name: string, value: any) {
        if (name.toLowerCase() === 'content-type') {
          const url = req.url?.split('?')[0] || '';
          if (url.endsWith('.tsx') || url.endsWith('.ts') || url.endsWith('.jsx') || url.endsWith('.js') || url.endsWith('.mjs')) {
            value = 'application/javascript';
          }
        }
        return originalSetHeader.call(this, name, value);
      };
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(), mimePlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
