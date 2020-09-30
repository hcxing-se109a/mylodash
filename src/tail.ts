export function tail(list: any[]): any[]{
    let length = list.length
    if (!length) return []

    let index = 0
    let result = new Array()

    while (index+1 < length) {
        result[index] = list[index + 1]
        index++
    }
    return result
}