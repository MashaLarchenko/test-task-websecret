import Filter from '../components/Filter/Filter'
import CatalogContainer from '../components/Catalog/CatalogContainer'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../redux/actions';

function Catalog({ catalog, brands }) {

  const dispatch = useDispatch();
  console.log(catalog,'DATA')
  useEffect(() => {
    dispatch(getAll({catalog, brands}))
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
