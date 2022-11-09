const axios = require('axios')
const key = require('../config/key')
const url_link = require('../config/url')

const fetchData = async (callback) => {
    const url_address = url_link.url
    const serviceKey = decodeURIComponent(key.apikey)
    try {
        const response = await axios.get(url_address,
            {
                params:
                {
                    pageNo: '1',
                    numOfRows: '30',
                    serviceKey: serviceKey
                },
            })
        if (response) {
            console.log(response.data.response.body.items.item)
        }
        callback(undefined, { cultureData: response.data.response.body.items.item })
    } catch (error) {
        console.log(error)
        console.log({ message: 'fail to fetch data' })
    }
}

module.exports = fetchData