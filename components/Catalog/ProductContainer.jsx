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
column-gap: 2%;
@media all and (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1%;
}

@media all and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3%;
    row-gap: 15px
}

@media all and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 3%;
    row-gap: 15px
}

 `

const ScrollContainer = styled.section`
position: relative;
float: left;
width: 100%;
height: 700px;
overflow: hidden;
overflow-y: auto;
display: flex;
justify-content: center;
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

