import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import amountReducer from './slices/amountReducer';
import ItemReducer from './slices/ItemReducer';
import { Provider } from 'react-redux'
import { adminApi } from './API/adminSlice';

 
const store = configureStore({
  reducer: {
    amount:amountReducer,
    item:ItemReducer,
    [adminApi.reducerPath] : adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(adminApi.middleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
