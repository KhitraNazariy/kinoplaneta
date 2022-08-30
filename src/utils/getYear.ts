export const getYear = (date: string | undefined) => {
    if  (!date) {
        return '—'
    }
    return  date.split('-')[0]
}