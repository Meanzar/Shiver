const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true
     },
    synopsis: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    videoUrl: {
        type: String,
        required: true
    },
    category: { 
        type: String, 
        required: true 
    },
    realisator: {type : String, 
        required:true
    },

    casting: {type: String, 
        required: true
    },
    year:{ 
        type: Number, 
        required: true 
    },
}, {timestamps: true})

module.exports = mongoose.model('Film', filmSchema)