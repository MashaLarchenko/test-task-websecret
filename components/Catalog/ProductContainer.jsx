import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import ProductItem from './ProductItem';

const scroll = keyframes`
    100 % { top: -360px; }
`

const ProductWrapper = styled.div`
position:absolute;
top:0;
animation: ${scroll} 10s linear 1s infinite;
display: grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 24px;
column-gap: 24px;
`

const ScrollContainer = styled.section`
position: relative;
float: left;
width: 100%;
height: 700px;
overflow: hidden;
overflow-y: auto;
::-webkit-scrollbar {
    width: 0px;
    background: transparent; 
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
`

function ProductContainer() {
    const { products } = useSelector(state => state.catalog.catalog);
    const [activeProducts, setactiveProducts] = useState([])

    useEffect(() => {
        setactiveProducts(products || [])
    }, [products])

    return (
        <ScrollContainer>
            <ProductWrapper>
                {!activeProducts.length ? 'НИЧЕГО НЕ НАЙДЕНО' : activeProducts.map((product, idx) => <ProductItem product={product} key={idx} />)}
            </ProductWrapper>
        </ScrollContainer>

    )
}

export default ProductContainer;

