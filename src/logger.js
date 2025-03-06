import chalk from "chalk";
import debug from 'debug';
import { LOGGER_TYPE } from "./contants.js";

export default function createLogger(name = LOGGER_TYPE.DEFAULT) {
    return {
        log: (...args) => console.log(chalk.gray(...args)),
        warning: (...args) => console.log(chalk.yellow(...args)),
        highlight: (...args) => console.log(chalk.bgCyanBright(...args)),
        debug: debug(name)
    };
}