const express = require('express')
let router = express.Router()
const fetchData = require('../api/fetchData')

router
    .route('/display')
    .get(async (req, res) => {
        try {
            await fetchData((error, { cultureData } = {}) => {
                if (error) {
                    console.log('error', error)
                }
                res.send(cultureData)
            })
        } catch (error) {
            res.status(500).send()
        }
    })


module.exports = router