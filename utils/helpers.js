

export const dateTimeString = (data) => {
    const date = new Intl.DateTimeFormat(
        'id-ID', {
            year: "2-digit",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }
    ).format(data?.toDate())

    return date;
}


export const slugify = (text) => {
    return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}