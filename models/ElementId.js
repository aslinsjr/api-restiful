const mongoose = require('mongoose')

const ElementId = mongoose.model('ElementId', {
    id: String
})

module.exports = ElementId