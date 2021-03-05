import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setActiveBrands, setChecked } from '../../redux/actions';
import Checkbox from './Checkbox';


const BrandInputContainer = styled.div`
display: flex;
flex-direction: column;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 140%;

&>h5 {
    padding-bottom: 20px;
}

&>div {
    display: flex;
    align-items: center;
    &>label:hover {
        cursor: pointer;
    }
}


`

function BrandContainer() {
    const { brands, min, max } = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const [activeFilter, setFilteredBrands] = useState([]);
    const handleBrandChecked = (brand, e) => {
        if (e.target.checked) {
            brand.checked = true;
            setChecked(
                [
                    ...brands,
                    brand
                ]
            )
            setFilteredBrands(
                [...activeFilter, brand]
            );
            return;
        }

        activeFilter.forEach((item, idx) => {
            if (item.title === brand.title) {
                item.checked = false;
                setChecked(
                    [
                        ...brands,
                        item
                    ]
                )
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
        dispatch(setActiveBrands(activeFilter))
        dispatch(fetchData(`${brandQuery}price[min]=${min}&price[max]=${max}`))

    }, [activeFilter])

    return (
        <>
            <BrandInputContainer>
                <h5 className="title--bold">Бренд</h5>
                {brands.map((brand, idx) => {
                    return <div key={idx} >
                        <label>
                            <Checkbox
                                checked={brand.checked}
                                onChange={(e) => handleBrandChecked(brand, e)}
                            />
                            <span style={{ marginLeft: 8 }} className='title__medium' >{brand.title}</span>
                        </label>
                    </div>
                }

                )}
            </BrandInputContainer>
        </>
    )

}

export default BrandContainer;

