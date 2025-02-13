import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const apiKey = 'bfb22c9f50424ceaa5f20aceaa56b0c7'
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
    }, [currency])
    console.log('data hghjfhf',data);
    return data
}

export default useCurrencyInfo;

//