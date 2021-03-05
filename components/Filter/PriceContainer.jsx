import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setMaxValue, setMinValue } from '../../redux/actions';
import styled from 'styled-components';

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
font-size: 1rem;
line-height: 140%;
border: 1px solid #DBDBDB;
text-align: center;
::placeholder {
    color: 1b1b1b;
  }
`
const RangeSlider = withStyles({
    root: {
        color: '#ff681c',
    },
    thumb: {
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        border: '4px solid #1b1b1b',
        background: 'rgb(255, 255, 255)',
        cursor: 'grab',
        boxShadow: 'rgb(0 0 0 / 4 %) 0px 4px 4px',
        '&:focus,&:hover,&$active': {
            boxShadow: '#ccc 0px 2px 3px 1px',
        },
        '& .bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 2,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 2,
    },
})(Slider);

function RangeThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </span>
    );
}

function PriceContainer() {
    const { activeBrands, min, max } = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const startRange = 0;
    const endRange = 499000;

    const [rangeValue, setRangeValue] = useState([startRange, endRange])

    const handlePriceChange = (event, type) => {
        const { value } = event.target;
        console.log(rangeValue, value, 'HANDLE CHANGE PRICE')
        if (type === 'maxValue' && value > startRange) return;
        if (type === 'minValue' && value < endRange) return;
        const currentRange = [...range];
        if (type === 'maxValue') {
            currentRange[1] = value;
            setRangeValue(currentRange)
            dispatch(setMaxValue(value))
        } else if (type === 'minValue') {
            currentRange[0] = value;
            setRangeValue(currentRange)
            dispatch(setMinValue(value))


        }
    }

    const handleRangeChange = (event, newValue) => {
        console.log(newValue, 'NEWN')
        dispatch(setMinValue(newValue[0]))
        dispatch(setMaxValue(newValue[1]))
        setRangeValue(newValue);
    };



    useEffect(() => {
        let brandQuery = '';
        activeBrands.forEach(brand => {
            return brandQuery += `brands[][]=${brand.value}&`;
        }
        );
        console.log(`${brandQuery}price[min]=${min}&price[max]=${max}`, rangeValue, 'EFFECT')
        dispatch(fetchData(`${brandQuery}price[min]=${min}&price[max]=${max}`))

    }, [rangeValue])

    return (
        <PriсeContainer>
            <h5 className='title--bold'>Цена, ₽</h5>
            <PriсeInputContainer>
                <PriсeInput type='number' placeholder={startRange} value={rangeValue[0]} onChange={(e) => handlePriceChange(e, 'minValue')} />
                <PriсeInput type='number' placeholder={endRange} value={rangeValue[1]} onChange={(e) => handlePriceChange(e, 'maxValue')} />
            </PriсeInputContainer>
            <RangeSlider
                ThumbComponent={RangeThumbComponent}
                onChange={handleRangeChange}
                min={startRange}
                max={endRange}
                value={rangeValue}
                aria-labelledby="range-slider"
            />
        </PriсeContainer>
    )

}

export default PriceContainer;

