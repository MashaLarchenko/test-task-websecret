import React from 'react'
import styled from 'styled-components';
import BrandContainer from './BrandContainer';
import PriceContainer from './PriceContainer';

const TitleCategory = styled.h3`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 140%;
color: #1B1B1B;
`;


function Filter() {
    return (
        <>
            <TitleCategory>Title</TitleCategory>
            <h5>Товаров 143</h5>
            <h3>Камеры</h3>
            <PriceContainer />
            <BrandContainer />
        </>
    )
}


export default Filter;
