export const getColorForRating = (num: number) => {
    if (num < 3) {
        return '#d00345'
    } else if(num < 7) {
        return '#D2D531'
    } else {
        return '#00A340'
    }
}