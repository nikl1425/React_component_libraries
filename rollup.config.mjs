import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import tailwind from 'rollup-plugin-tailwindcss';
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';


export default [
  {
    input: "./src/index.ts",
    output: [
      {
        sourcemap: true,
        file: "dist/index.js",
        format: "cjs",
      },
      {
        sourcemap: true,
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      typescript(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      tailwind({
        input: './src/styles.css', // required
        // Tailor the emitted stylesheet to the bundle by removing any unused CSS
        // (highly recommended when packaging for distribution).
        purge: false,
      }),
      terser(),
    ],
  },
];