import { cosmiconfigSync } from 'cosmiconfig';
import Ajv from 'ajv';
import { readFile } from 'fs/promises';
import betterAjvErrors from 'better-ajv-errors';
import createLogger from "../logger.js";
const schema = JSON.parse(await readFile(new URL('./schema.json', import.meta.url), 'utf-8'));
const ajv = new Ajv();
const configLoader = cosmiconfigSync('tool');
const logger = createLogger('config:mgr');

export function getConfig() {

    const result = configLoader.search(process.cwd());

    if (!result) {

        logger.warning('Could not find configuration, using default')
        return { port: 1234 };

    } else {
        const isValid = ajv.validate(schema, result.config);
        
        if(!isValid) {

            logger.warning('Invalid configuration was supplied');
            console.log();
            console.log(betterAjvErrors(schema, result.config, ajv.errors));
            process.exit(1);
            
        }

        logger.debug('Found configuration', result.config);
        return result.config;
    }
} 