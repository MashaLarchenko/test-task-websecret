import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setMaxValue, setMinValue } from '../../redux/actions';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';

import RangeSlider from './RangeSlider';

const PriсeContainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 4px;
`

const PriсeInputContainer = styled.div`
display: flex;
flex-direction: row;
`

const PriсeInput = styled.input`
width: 50%;
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
height: 14px;
width: 100%;
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
    const { activeBrands, min, max } = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const [price, setPrice] = useState({
        min: min || 0,
        max: max || 499000,
        minValue: min,
        maxValue: max,
    })

    const [rangeValue, setRangeValue] = useState([min, max])

    const handlePriceChange = (event, type) => {
        const { value } = event.target;
        if (type === 'maxValue' && value > price.max) return;
        if (type === 'minValue' && value < price.min) return;
        setPrice({
            ...price,
            [type]: Number(value)
        })
        if (type === 'maxValue') {
            dispatch(setMaxValue(value))
        } else if (type === 'minValue') {
            dispatch(setMinValue(value))
        }
    }

    const handleRangeChange = (event, newValue) => {
        setRangeValue(newValue);
      };



    useEffect(() => {
        let brandQuery = '';
        activeBrands.forEach(brand => {
            return brandQuery += `brands[][]=${brand.value}&`;
        }
        );
        dispatch(fetchData(`${brandQuery}price[min]=${min}&price[max]=${max}`))

    }, [price, rangeValue])

    return (
        <PriсeContainer>
            <h5 className='title--bold'>Цена, ₽</h5>
            <PriсeInputContainer>
                <PriсeInput type='number' placeholder={price.min} value={price.minValue} onChange={(e) => handlePriceChange(e, 'minValue')} />
                <PriсeInput type='number' placeholder={price.max} value={price.maxValue} onChange={(e) => handlePriceChange(e, 'maxValue')} />
            </PriсeInputContainer>
            <Slider
                value={rangeValue}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
            {/* <PriceRangeContainer className="range__container"> */}

            {/* <PriсeRange type='range' min={price.min} max={price.max} value={price.minValue} className='input__range--first slider' id='lower' onChange={(e) => handlePriceChange(e, 'minValue')} /> */}
            {/* <PriсeRange type='range' min={price.min} max={price.max} value={price.maxValue} className='input__range--second slider' id='higher' onChange={(e) => handlePriceChange(e, 'maxValue')} /> */}
            {/* <PriсeRangeLabel htmlFor="priceRange"></PriсeRangeLabel> */}
            {/* </PriceRangeContainer> */}
        </PriсeContainer>
    )

}

export default PriceContainer;

