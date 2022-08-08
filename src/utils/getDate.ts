export interface IMonth {
    id: number;
    name: string;
}

const months: IMonth[] = [
    {id: 1, name: 'січ'},
    {id: 2, name: 'лют'},
    {id: 3, name: 'бер'},
    {id: 4, name: 'квіт'},
    {id: 5, name: 'трав'},
    {id: 6, name: 'черв'},
    {id: 7, name: 'лип'},
    {id: 8, name: 'серп'},
    {id: 9, name: 'вер'},
    {id: 10, name: 'жовт'},
    {id: 11, name: 'лист'},
    {id: 12, name: 'груд'},
]

const getMonthName = (month: string, arrMonths: IMonth[]) => {
    let monthId = '' as string
    if (month.startsWith('0')) {
        monthId = month.slice(1)
    } else {
        monthId = month
    }

    const monthName = arrMonths.find(item => String(item.id) === monthId)

    return monthName?.name
}



export const getDate = (data: string) => {
    const arrDate = data.split('-')
    const year = arrDate[0]
    const month = getMonthName(arrDate[1], months)
    const day = arrDate[2]
    return `${day} ${month}. ${year}`
}