import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setActiveBrands } from '../../redux/actions';


const BrandInputContainer = styled.div`
display: flex;
flex-direction: column;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 140%;
&>div {
    display: flex;
    align-items: center;
}
`

const BrandInput = styled.input`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 140%;
border: 1px solid #DBDBDB;
text-align: center;
`

const BrandLabel = styled.label`
margin-left: 9px;
`

function BrandContainer() {
    const { brands, min, max } = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const [activeFilter, setFilteredBrands] = useState([]);

    const handleBrandChecked = (brand, e) => {
        if (e.target.checked) {
            setFilteredBrands(
                [...activeFilter, brand]
            );
            return;
        }

        activeFilter.forEach((item, idx) => {
            if (item.title === brand.title) {
                const newFilter = [...activeFilter];
                newFilter.splice(idx, 1);
                setFilteredBrands(newFilter);
            }
        })

    }

    useEffect(() => {
        let brandQuery = '';
        activeFilter.forEach(brand => {
           brandQuery += `brands[][]=${brand.value}&`;
        }
        );

        console.log(brands,  'IN BRA')
        dispatch(setActiveBrands(activeFilter))
        dispatch(fetchData(`${brandQuery}price[min]=${min}&price[max]=${max}`))

    }, [activeFilter])

    return (
        <>
            <BrandInputContainer>
                <h5 className="title--bold">Бренд</h5>
                {brands.map((brand, idx) => {
                    return <div key={idx} >
                        <BrandInput type="checkbox" value={brand.title} id={`brand${brand.title}`} onChange={(e) => handleBrandChecked(brand, e)} />
                        <BrandLabel htmlFor={`brand${brand.title}`} className='title__medium'>{brand.title}</BrandLabel>
                    </div>
                }

                )}
            </BrandInputContainer>
        </>
    )

}

export default BrandContainer;

