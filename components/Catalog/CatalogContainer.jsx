import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const BrandInputContainer = styled.div`
display: flex;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
`

const BrandInput = styled.input`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
border: 1px solid #DBDBDB;
text-align: center;
`

const PriceRangeContainer = styled.div`
display: grid;
grid-template-rows: max-content 1em;
margin: 1em auto;
width: 219px;
position: relative;
`

const PriсeRange = styled.input`
grid-column: 1;
grid-row: 2;
`

const PriсeRangeLabel = styled.input`
position: absolute;
clip-path: inset(50%);
`

function CatalogContainer() {
    const { products } = useSelector(state => state.catalog.catalog);
    const [activeProducts, setactiveProducts] = useState([])

    useEffect(() => {
        setactiveProducts(products || [])
    }, [products])
    return (
        <>
            <div>
{console.log(activeProducts)}
                Catalog
                {!activeProducts.length ? 'loading' : activeProducts.map(product => console.log(product, 'PRODUCT'))}
            </div>
        </>
    )

}

export default CatalogContainer;

