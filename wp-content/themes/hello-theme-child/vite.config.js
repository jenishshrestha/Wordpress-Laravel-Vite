import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import * as glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { resolve } = path;

/**
 * ====================================================================
 * Getting all scss files relative url
 * ====================================================================
 */
let sass = Object.fromEntries(
  glob
    .sync('app/elementor-addon/assets/scss/**/*.scss')
    .map((file) => [
      path.relative('resources/sass', file.slice(0, file.length - path.extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);

sass = Object.values(sass);

// main global scss file
let mainSCSS = fileURLToPath(new URL('resources/scss/main.scss', import.meta.url));

/**
 * ====================================================================
 * Getting all js files relative url
 * ====================================================================
 */
let js = Object.fromEntries(
  glob
    .sync('app/elementor-addon/assets/js/**/*.js')
    .map((file) => [
      path.relative('resources/js', file.slice(0, file.length - path.extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);
js = Object.values(js);

// main global js file
let mainJS = fileURLToPath(new URL('resources/js/app.js', import.meta.url));

let input = [mainSCSS, sass, js, mainJS];
input = [].concat(...input);

/**
 * ====================================================================
 * Configurations required by vite
 * ====================================================================
 */
export default defineConfig({
  base: '',
  plugins: [
    laravel({
      input,
      publicDirectory: 'build',
      refresh: ['**.php', '**.js', '**.scss', '**.css'],
    }),
  ],
  server: {
    port: 2222,
  },
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: 'build',
    assetsDir: 'assets',
  },
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: process.cwd() + '/node_modules/$1',
      },
    ],
  },
});
