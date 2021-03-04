import React, { useState } from 'react'
import styled from 'styled-components';

const PriсeInputContainer = styled.div`
display: flex;
width: 224px;
height: 42px;
border-radius: 4px;
`

const PriсeInput = styled.input`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
border: 1px solid #DBDBDB;
text-align: center;
::placeholder {
    color: 1b1b1b;
  }
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

function PriceContainer() {
    const [price, setPrice] = useState({
        min: 0,
        max: 499000,
        minValue: 0,
        maxValue: 499000,
    })

    const handlePriceChange = (event, type) => {
        if(type === 'maxValue' && event.target.value > price.max) return;
        if(type === 'minValue' && event.target.value < price.min) return;
        setPrice({
            ...price,
            [type]: Number(event.target.value)
        })
    }

    return (
        <>
            <h5>Цена, р</h5>
            <PriсeInputContainer>
                <PriсeInput type='number' placeholder={price.min} value={price.minValue} onChange={(e) => handlePriceChange(e, 'minValue')} />
                <PriсeInput type='number' placeholder={price.max} value={price.maxValue} onChange={(e) => handlePriceChange(e, 'maxValue')} />
                <PriceRangeContainer className="range__container">
                    <PriсeRange type='range' min={price.min} max={price.max} value={price.minValue} id='priceRange' onChange={(e) => handlePriceChange(e, 'minValue')} />
                    <PriсeRange type='range' min={price.min} max={price.max} value={price.maxValue} id='priceRange' onChange={(e) => handlePriceChange(e, 'maxValue')} />
                    <PriсeRangeLabel htmlFor="priceRange"></PriсeRangeLabel>
                </PriceRangeContainer>

            </PriсeInputContainer>
        </>
    )

}

export default PriceContainer;

