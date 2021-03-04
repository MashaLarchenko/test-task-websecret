import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setActiveBrands } from '../../redux/actions';


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

function BrandContainer() {
    const { brands, min, max } = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const [activeFilter, setfilteredBrands] = useState(['1', '2', '3']);

    const handleBrandChecked = (brand, e) => {
        if (e.target.checked) {
            setfilteredBrands(
                [...activeFilter, brand]
            );
            return;
        }
        activeFilter.forEach((item, idx) => {
            if (item.title === brand.title) {
                console.log(2)

                const newFilter = [...activeFilter];
                newFilter.splice(idx, 1);
                setfilteredBrands(newFilter);
            }
        })

    }

    useEffect(() => {
        const brandsValues = activeFilter.map(brand => brand.value);
        dispatch(setActiveBrands(activeFilter))
        dispatch(fetchData(`brands=${brandsValues}&price[min]=${min}&price[max]=${max}`))

    }, [activeFilter])

    return (
        <>
            <BrandInputContainer>
                <h5>Бренд</h5>
                {brands.map((brand, idx) => {
                    return <div key={idx} >
                        <BrandInput type="checkbox" value={brand.title} id={`brand${brand}`} onChange={(e) => handleBrandChecked(brand, e)} />
                        <label htmlFor={`brand${brand}`}>{brand.title}</label>
                    </div>
                }

                )}
            </BrandInputContainer>
        </>
    )

}

export default BrandContainer;

