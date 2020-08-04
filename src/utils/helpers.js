/**
 * Check if property is an object
 * @param { * } obj 
 */
export const isEmpty = (obj) => {
    if (obj !== undefined) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                return false
            }
        }
    }
    return JSON.stringify(obj) === JSON.stringify({})
}