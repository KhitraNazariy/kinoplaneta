export const getYear = (date: string | undefined | null) => {
    if  (!date) {
        return '—'
    }
    return  date.split('-')[0]
}