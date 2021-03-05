import Filter from '../components/Filter/Filter'
import CatalogContainer from '../components/Catalog/ProductContainer'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../redux/actions';

function Catalog({ catalog, brands }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const availableBrands = brands.items.map(brand => {
      return {
        ...brand,
        checked: false
      }
    });
    dispatch(getAll({ catalog, brands: availableBrands }))
  }, [])

  return (
    <div className='catalog__section'>
      <Filter />
      <CatalogContainer />
    </div>
  )
}


Catalog.getInitialProps = async () => {
  const res = await fetch(process.env.APP_BASE_URL)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    catalog: data.products,
    brands: data.filters.find(item => item.title === 'Бренд')
  }
}


export default Catalog;
