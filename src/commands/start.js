import { LOGGER_TYPE } from "../contants.js";
import createLogger from "../logger.js";
const logger = createLogger(LOGGER_TYPE.COMMAND_START);

export default function start(config) {
    logger.highlight('  Starting the app  ');
    logger.debug('Received configuration', config);
}