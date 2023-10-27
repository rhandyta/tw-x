

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