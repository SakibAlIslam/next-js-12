import {useRouter} from 'next/router';
import React from 'react'

const Doc = () => {
    const router = useRouter();
    const { params = []} = router.query;
    console.log(params)
    if (params.length === 2) {
        return (<h1>Viewing docs for {params[0]} and {params[1]}</h1>)
    } else if (params.length === 1) {
        return (<h1>Viewing docs for {params[0]}</h1>)
    }
    return <div>Doc Home Page - </div>
}

export default Doc