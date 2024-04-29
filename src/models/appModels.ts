import { ReactNode } from "react";
import { Image } from "react-native";

export interface IMenuItem {
    id: number,
    title: string,
    icon: ReactNode,
}

export interface IServiceItem {
    id: string;
    image: string;
    name: string;
    serviceName: string;
    serviceId: number;
    price: number;
    rating: number;
    reviewsCount: number;
    address: string;
    about: string;
}

export interface IReview {
    id: string;
    name: string;
    rating: number;
    review: string;
    image: string;
    date: number;
}

export interface IServiceDetail {
    images: string[],
    description: string,
    reviews: IReview[]
}

