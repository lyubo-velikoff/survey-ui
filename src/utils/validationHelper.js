/* ==============================================================
Messages
============================================================== */

const requiredMessage = 'Required'
const numberMessage = 'Must be a number'
const alphaNumericMessage = 'Only alphanumeric characters'
const macAddressMessage = 'Must be a valid mac address'
const emailMessage = 'Invalid email address'
const valueLengthMessage = length => `Must be ${length} characters`
const maxLengthMessage = max => `Must be ${max} characters or less`

/* ==============================================================
Regular expressions
============================================================== */

export const alphaNumericExpression = /[^a-zA-Z0-9 ]/i
export const macAddressExpression = /^[0-9A-F]{16}$/
export const emailExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

/* ==============================================================
Validations
============================================================== */

export const required = value => 
    (value || typeof value === 'number' ? undefined : requiredMessage)

export const number = value =>
    value && isNaN(Number(value))
        ? numberMessage
        : undefined

export const alphaNumeric = value =>
    value && alphaNumericExpression.test(value)
        ? alphaNumericMessage
        : undefined

export const macAddress = value =>
    value && !macAddressExpression.test(value)
        ? macAddressMessage
        : undefined

export const email = value => 
    value && !emailExpression.test(value)
        ? emailMessage
        : undefined

export const valueLength = length => value =>
    value && !value.length === length 
        ? valueLengthMessage(length)
        : undefined

export const valueLength4 = valueLength(4)

export const maxLength = max => value =>
    value && value.length > max
        ? maxLengthMessage(max)
        : undefined

export const maxLength3 = maxLength(3)

export const maxLength4 = maxLength(4)

export const maxLength15 = maxLength(15)

export const maxLength50 = maxLength(50)

export const maxLength64 = maxLength(64)