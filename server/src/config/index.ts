import { getVariable } from "../util/clearfy";


export const ENV = {
    dev: 'development',
    prod: 'production',
    test: 'testing'
};

let config = {
    environment: getVariable((env: any) => env.NODE_ENV) || ENV.dev,
    port: getVariable((env: any) => env.PORT) || 3000,
    logging: true
};

// merge environment specific config to default config.
config = { ...config, ...require(`./${config.environment}`.replace(/('|\s)/g, "")).config };

export default config;