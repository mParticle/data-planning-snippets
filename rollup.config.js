import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const { ENVIRONMENT } = process.env;

const defaultOutput = {
    input: 'src/mpSnippets.ts',
    plugins: [
        typescript(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                '@mparticle/data-planning-models': ['DataPlanMatchType'],
            },
        }),
        resolve(),
    ],
};

const cjsBuild = {
    ...defaultOutput,
    output: {
        file: 'dist/data-planning-snippets.common.js',
        format: 'cjs',
        sourcemap: ENVIRONMENT !== 'prod',
    },
};

export default [cjsBuild];
