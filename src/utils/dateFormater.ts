export const dateFormat = (isoDate: Date) => {
    
    const date = new Date(isoDate)
    const formattedDate = date
        .toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        })
        .replace(',', '')

    return formattedDate
}