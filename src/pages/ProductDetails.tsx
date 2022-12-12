import React from 'react';
import { fetchProductDetails } from '../features/products/productsSlice';
import { useAppDispatch } from '../hooks';

export default function ProductDetails() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);

  return <div>ProductDetails</div>;
}
