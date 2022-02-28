const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },

        pitch: [{
            type: Schema.Types.ObjectId,
            ref: "Pitch"
        }]

    },
    {
        timestamps: true,
    }
)

const Place = model("Place", placeSchema)

module.exports = Place
