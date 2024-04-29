import { appStateSelectors, useApp } from '../states/app';
import { generateRandomImages, generateRandomReviews } from '../utils/myUtils';

const useApi = () => {
    const favorites = useApp(appStateSelectors.favorites)
    const setFavorites = useApp(appStateSelectors.setFavorites)

    const getData = (description: string, numberOfReviews: number) => {

        const data = {
            images: generateRandomImages(),
            description: description,
            reviews: generateRandomReviews(numberOfReviews).sort((a, b) => b.date - a.date)
        };

        return data;
    }

    const handleFavorite = (id: string) => {
        const exists = favorites.find((x) => x == id)
        if (exists) {
            const filtered = favorites.filter((x) => x != id)
            setFavorites(filtered)
        } else {
            setFavorites([...favorites, id])
        }
    }

    const isFavorite = (id: string) => {
        const exists = favorites.find((x) => x == id)
        return exists ? true : false
    }

    return {
        getData,
        handleFavorite,
        isFavorite
    };
};

export default useApi;
