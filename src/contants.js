const enumValue = (name) => Object.freeze({toString: () => name});

export const LOGGER_TYPE = Object.freeze({
    BIN: enumValue("bin"),
    CONFIG_MANAGER: enumValue("config:mgr"),
    COMMAND_START: enumValue("commands:start"),
    DEFAULT: enumValue("logger"),
});

