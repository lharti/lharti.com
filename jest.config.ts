import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

const config: Config = {
    clearMocks: true,

    coverageProvider: 'v8',
    testEnvironment: 'jsdom',

    prettierPath: require.resolve('prettier-2'),

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    transform: {
        '^src/.+.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },

    roots: ['<rootDir>'],

    modulePaths: [compilerOptions.baseUrl],

    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
