export const getYear = (date: string) => {
    if  (!date) {
        return 'рік не вказаний'
    }
    return  date.split('-')[0]
}