import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCityWeather, fetchMultipleCitiesWeather } from './weatherApi';
import { getCurrentDate, getCurrentTime } from '../../helpers/dateUtils';

const initialState = {
  mainCityState: {
      name: 'London',
      countryCode: 'GB',
      date: getCurrentDate(),
      weatherStatus: '-',
      temp: '-'
  },
  otherCities: [
    {
        id: 1,
        name: 'Rome',
        countryCode: 'IT',
        date: getCurrentDate(),
        weatherStatus: '-',
        temp: '-',
        time: getCurrentTime()
    },
    {
        id: 2,
        name: 'Venice',
        countryCode: 'IT',
        date: getCurrentDate(),
        weatherStatus: '-',
        temp: '-',
        time: getCurrentTime()
    }
  ],
  status: 'idle'
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchMainCityData({citiName: 'London', countryCode: 'GB'}))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchMainCityData = createAsyncThunk(
  'weather/fetchDataMainCity',
  async (callData) => {
    const response = await fetchCityWeather(callData.cityName, callData.countryCode);
    console.log('Returned data: ', response);

    return response;
  }
);

export const fetchOtherCitiesData = createAsyncThunk(
    'weather/fetchDataOtherCities',
    async (data, thunkAPI) => {
        let currentState = thunkAPI.getState();
        const response = await fetchMultipleCitiesWeather(currentState.weather.otherCities.map(item => { return { name: item.name, countryCode: item.countryCode } })); 
        return response;
    }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
    .addCase(fetchMainCityData.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchMainCityData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.mainCityState.weatherStatus = action.payload.weather[0].main;
        state.mainCityState.temp = action.payload.main.temp;
    });

    builder
    .addCase(fetchOtherCitiesData.pending, state => {
        state.status = 'loading';
    })
    .addCase(fetchOtherCitiesData.fulfilled, (state, action) => {
        state.status = 'idle';
        action.payload.forEach(cityItem => {
            let cityIndex = state.otherCities.findIndex(city => city.name === cityItem.name);
            if(!state.otherCities[cityIndex]) return;

            state.otherCities[cityIndex] = {
                ...state.otherCities[cityIndex],
                weatherStatus: cityItem.weather[0].main,
                temp: cityItem.main.temp,
                date: getCurrentDate(),
                time: getCurrentTime()
            }
        })
    });
    
  },
});

export const { increment, decrement, incrementByAmount } = weatherSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMainCity = (state) => state.mainCityState;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

export default weatherSlice.reducer;