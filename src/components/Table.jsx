import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const data1 = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')

        setData(data1.data["Time Series (5min)"]);
    }
    console.log(data);

    const myData = Object.entries(data);
    console.log("myData", myData)


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>DateTime</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myData.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]["1. open"]}</td>
                                    <td>{item[1]["2. high"]}</td>
                                    <td>{item[1]["3. low"]}</td>
                                    <td>{item[1]["4. close"]}</td>
                                    <td>{item[1]["5. volume"]}</td>
                                </tr>



                            )
                        })
                    }

                </tbody>
            </table>


        </>
    )
}

export default Table