import {useRouter} from 'next/router'
import React from 'react'

const ReviewDetails = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query;
  return (
    <div>
        <h1>
          Product details of {productId}, Review Details of {reviewId}
        </h1>
    </div>
  )
}

export default ReviewDetails