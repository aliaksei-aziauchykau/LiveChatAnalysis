const getVariable = (map: any, defaultVal = null) => {
    const booleanValueTrue = "true";
    const booleanValueFalse = "false";
    const variable = map(process.env);
    let result = process.env && variable && variable.replace(/('|\s)/g, "") || defaultVal;
    result = result === booleanValueTrue ? true : result;
    result = result === booleanValueFalse ? false : result;
    return result;
};

export {
    getVariable
}