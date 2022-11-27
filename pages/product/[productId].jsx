import {useRouter} from 'next/router'
import React from 'react'

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  console.log('router:', router);
  return (
    <h1>Details about Product - {productId}</h1>
  )
}

export default ProductDetail