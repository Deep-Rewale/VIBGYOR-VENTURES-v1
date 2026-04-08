import React from 'react'
import CorporateHero from '../components/CorporateGift/CorporateHero'
import CorporateSolution from '../components/CorporateGift/CorporateSolution'
import GiftingApproach from '../components/CorporateGift/GiftingApproach'
import Brands from "../components/home/Brands";
import Testmonial from "../components/home/Testmonial";

const CorporateGifting = () => {
    return (
        <>
            <CorporateHero />
            <CorporateSolution />
            <GiftingApproach />
            <Brands />
            <Testmonial />
        </>
    )
}

export default CorporateGifting