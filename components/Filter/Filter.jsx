import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import BrandContainer from './BrandContainer';
import PriceContainer from './PriceContainer';

const FilterContainer = styled.section`
margin-right: 3%;
&>h5 {
    color: #898989;
}
`

const TitleCategory = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 140%;
color: #1B1B1B;
`;


function Filter() {
    const { products } = useSelector(state => state.catalog.catalog);
    const [activeProducts, setactiveProducts] = useState([]);

    useEffect(() => {
        setactiveProducts(products || [])
    }, [products])

    return (
        <FilterContainer>
            <h5>Товаров {activeProducts.length}</h5>
            <TitleCategory>Камеры</TitleCategory>
            <PriceContainer />
            <BrandContainer />
        </FilterContainer>
    )
}


export default Filter;
