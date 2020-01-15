import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const { ENVIRONMENT } = process.env;

const defaultOutput = {
    input: 'src/index.ts',
    plugins: [typescript(), commonjs(), resolve()],
};

const iifeBuild = {
    ...defaultOutput,
    output: {
        file: 'dist/data-planning-snippets.iife.js',
        format: 'iife',
        name: 'MPDataPlanning',
        sourcemap: ENVIRONMENT !== 'prod',
    },
};

const cjsBuild = {
    ...defaultOutput,
    output: {
        file: 'dist/data-planning-snippets.common.js',
        format: 'cjs',
        sourcemap: ENVIRONMENT !== 'prod',
    },
};

export default [iifeBuild, cjsBuild];
