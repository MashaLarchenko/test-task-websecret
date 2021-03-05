import {
  GET_DATA,
  SET_BRANDS,
  SET_MAXVALUE,
  SET_MINVALUE,
  SET_CHECKBRANDS,
  GET_ALL,
  ERROR_DATA
} from './actionTypes';


export const fetchData = (query) => async dispatch => {
  try {
    const response = await fetch(`${process.env.APP_BASE_URL}?${query}`);
    const data = await response.json();
    dispatch(
      {
        type: GET_DATA,
        payload: data,
      }
    )
  } catch (e) {
    dispatch(
      {
        type: ERROR_DATA,
        payload: e,
      }
    )
  }


}

export const setActiveBrands = (brands) => {
  return {
    type: SET_BRANDS,
    payload: brands
  };
}

export const setMinValue = (min) => {
  return {
    type: SET_MINVALUE,
    payload: min
  };
}


export const setMaxValue = (max) => {
  return {
    type: SET_MAXVALUE,
    payload: max
  };
}


export const getAll = (allData) => {
  return {
    type: GET_ALL,
    payload: allData
  }
}

export const setChecked = (brands) => {
  return {
    type: SET_CHECKBRANDS,
    payload: brands
  }
}
