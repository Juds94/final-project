const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Debes introducir el usuario']
    },
    password: {
      type: String,
      required: [true, 'Debes introducir la contraseña']
    },
    email: {
      type: String,
      required: [true, 'Debes introducir la contraseña']
    },
    profilePic: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    description: {
      type: String,
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER', 'EQUIP']
    },
    favPlaces: [{
      type: Schema.Types.ObjectId,
      ref: "Place"
    }],
    donePitches: [{
      type: Schema.Types.ObjectId,
      ref: "Pitch"
    }],
    wishPitches: [{
      type: Schema.Types.ObjectId,
      ref: "Pitch"
    }]

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema)

User.syncIndexes()

module.exports = User;
