import { IMenuItem } from "../models/appModels"
import { AcRepair, Applicance, Beauty, Cleaning, Electronics, Laundry, Massage, Movers, Painting, Plumbing, Repairing, Salon, Vehicle } from '../assets/icons'
import React from "react"
import { hp } from "../assets/stylesGuide"

const SERVICES_LIST: IMenuItem[] = [
    {
        id: 1,
        title: "Cleaning",
        icon: <Cleaning width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 2,
        title: "Repairing",
        icon: <Repairing width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 3,
        title: "Painting",
        icon: <Painting width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 4,
        title: "Laundry",
        icon: <Laundry width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 5,
        title: "Appliance",
        icon: <Applicance width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 6,
        title: "Plumbing",
        icon: <Plumbing width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 7,
        title: "Movers",
        icon: <Movers width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 8,
        title: "Beauty",
        icon: <Beauty width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 9,
        title: "Ac Repair",
        icon: <AcRepair width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 10,
        title: "Vehicle",
        icon: <Vehicle width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 11,
        title: "Electronics",
        icon: <Electronics width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 12,
        title: "Massage",
        icon: <Massage width={hp(6.2)} height={hp(6.2)} />,
    },
    {
        id: 13,
        title: "Salon",
        icon: <Salon width={hp(6.2)} height={hp(6.2)} />,
    },

]

const REVIEW_FILTER = [
    {
        id: 1,
        title: 'All'
    },
    {
        id: 2,
        title: '5'
    },
    {
        id: 3,
        title: '4'
    },
    {
        id: 4,
        title: '3'
    },
    {
        id: 5,
        title: '2'
    },
    {
        id: 6,
        title: '1'
    },
]


export {
    SERVICES_LIST,
    REVIEW_FILTER
}