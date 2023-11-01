
/**
 * 
 * @param {*} nameStorage  : string
 * @param {*} value : any
 * @returns 
 */
export const setLocaleStorage = (nameStorage = "", value) => {
    let valueJSON = JSON.stringify(value);
    localStorage.setItem(nameStorage, valueJSON);
    let result = getLocaleStorage(nameStorage) ? true : false;
    return result;
}

/**
 * @param {*} nameStorage: string
 * @returns value || null
 */
export const getLocaleStorage = (nameStorage = "") => {
    let value = localStorage.getItem(nameStorage);
    let data = value && JSON.parse(value);
    return data;
}