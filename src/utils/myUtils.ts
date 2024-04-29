import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"
import moment from "moment";


const isIOS = () => {
    return Platform.OS == 'ios'
}

const hasNotch = () => {
    return DeviceInfo.hasNotch()
}

const formateDate = (_date: any) => {
    const date = moment(_date).format('DD')
    const month = moment(_date).format('MM')
    const year = moment(_date).format('YYYY')
    return `${year}-${month}-${date}`
}

const generateRandomId = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const generateRandomDate = () => {
    return Math.floor(Math.random() * Math.floor(Date.now() / 1000));
}

const generateRandomImages = () => {
    const numberOfImages = Math.floor(Math.random() * 7) + 3; // Random number between 3 and 9
    const images = [];
    for (let i = 0; i < numberOfImages; i++) {
        const randomId = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 237
        images.push(`https://picsum.photos/id/${randomId}/200/300`);
    }
    return images;
}

const generateRandomReviews = (numberOfReviews: number) => {
    const reviews = [];
    const ratings = [1, 2, 3, 4, 5];
    const reviewerNames = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Emily Davis"];
    for (let i = 0; i < numberOfReviews; i++) {
        const id = generateRandomId(32);
        const name = reviewerNames[Math.floor(Math.random() * reviewerNames.length)];
        const rating = ratings[Math.floor(Math.random() * ratings.length)];
        const review = rating <= 3 ? "Could be better. Needs improvement." : "Absolutely loved it! Highly recommended.";
        const randomId = Math.floor(Math.random() * 237) + 1; // Random number between 1 and 237
        const image = `https://picsum.photos/id/${randomId}/200/300`;
        const date = generateRandomDate();
        reviews.push({ id, name, rating, review, image, date });
    }
    return reviews;
}

const unixTimeAgo = (unixTime: number) => {
    const momentTime = moment.unix(unixTime);
    return momentTime.fromNow();
}

export {
    isIOS,
    hasNotch,
    formateDate,
    generateRandomId,
    generateRandomDate,
    generateRandomImages,
    generateRandomReviews,
    unixTimeAgo
}