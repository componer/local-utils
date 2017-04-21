export function isTrue(value, {zero = true, infinity = false, emptyString = false, emptyArray = false, emptyObject = false} = {}) {
    if(value === 0) return !!zero
    if(value === '') return !!emptyString
    if(value === Infinity) return !!infinity
    if(Array.isArray(value) && value.length === 0) return !!emptyArray
    if(value === null) return false
    if(typeof value === 'object' && Object.keys(value).length === 0) return !!emptyObject
    return !!value
}

export function isNumeric(value, useStringAsNumber = true) {
    if(typeof value === 'number' && Number.isFinite(value)) return true
    if(useStringAsNumber && typeof value === 'string' && value !== '' && !isNaN(value - 0)) return true
    return false
}
