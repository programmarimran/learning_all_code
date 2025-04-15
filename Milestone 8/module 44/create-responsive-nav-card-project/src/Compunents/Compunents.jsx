import React, { Suspense } from 'react';
// import DaisyPricingCard from './Compunents/DaisyPricingCard/DaisyPricingCard'
import Navber from './Navber/Navber'
import DaisyPricingCard from './DaisyPricingCard/DaisyPricingCard';
import ResultCharts from './ResultCharts/ResultCharts';
import axios from 'axios';
import AxiosResult from './AxiosResult/AxiosResult';
const Compunents = () => {
    const ResultChart=axios.get('AxiosResult.json')

    return (
        <div>
           
            <Navber></Navber>
            {/* <DaisyPricingCard></DaisyPricingCard> */}
            <DaisyPricingCard></DaisyPricingCard>
            <ResultCharts></ResultCharts>
            <Suspense fallback={<h1>data is loading.......</h1>}>
            <AxiosResult ResultChart={ResultChart}></AxiosResult>
            </Suspense>
        </div>
    );
};

export default Compunents;
