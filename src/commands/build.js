import { LOGGER_TYPE } from "../contants.js";
import createLogger from "../logger.js";
const logger = createLogger(LOGGER_TYPE.COMMAND_BUILD);

export default function build(config) {
    logger.highlight('  Build started...  ');
    logger.debug('Received configuration', config);
}