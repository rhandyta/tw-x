import { Timestamp } from "firebase/firestore"

export const dateTimeFormat = (data) => {
    const dateTime = new Timestamp(data.seconds, data.nanoseconds);
    return dateTime.toDate();
}

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

export const dateTime = (value) => {
    // Contoh variabel date dari serverTimestamp()
        const date = new Date(value); // Gantilah ini dengan variabel date yang sesuai dari serverTimestamp()

        // Fungsi untuk menambahkan angka nol jika nilai kurang dari 10
        const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

        // Mendapatkan nilai tahun, bulan, hari, jam, menit, detik, dan milidetik
        const year = date.getFullYear();
        const month = addLeadingZero(date.getMonth() + 1);
        const day = addLeadingZero(date.getDate());
        const hours = addLeadingZero(date.getHours());
        const minutes = addLeadingZero(date.getMinutes());
        const seconds = addLeadingZero(date.getSeconds());
        const milliseconds = date.getMilliseconds();

        // Membentuk string hasil
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;

        return formattedDate;

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