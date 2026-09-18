import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/project-Modern-Product--Launch/"
      : "/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        cart: path.resolve(__dirname, "src/cart.html"),
        productDetail: path.resolve(__dirname, "src/productDetail.html"),
        // ...
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
