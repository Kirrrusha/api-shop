import * as mongoose from 'mongoose';
import * as validator from 'validator';
import { genderEnum } from '../enums/gender.enum';
import { roleEnum } from '../enums/role.enum';
import { statusEnum } from '../enums/status.enum';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Enter login'],
    trim: true,
    minLength: 2,
    maxlength: 15,
    validate: {
      validator: (value) => validator.isAlphanumeric(value, 'en-US'),
      message: '{VALUE} Invalid value',
    },
  },
  email: {
    type: String,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: '{VALUE} Invalid email',
    },
    required: [true, 'Enter email'],
  },
  password: {
    type: String,
    required: [true, 'Enter password'],
  },
  surname: {
    type: String,
    trim: true,
    maxlength: 20,
    validate: {
      validator: (value) => validator.isAlpha(value, 'en-US'),
      message: '{VALUE} Invalid value',
    },
  },
  name: {
    type: String,
    trim: true,
    maxlength: 20,
    validate: {
      validator: (value) => validator.isAlpha(value, 'en-US'),
      message: '{VALUE} Invalid value',
    },
  },
  status: { type: String, enum: Object.values(statusEnum), default: statusEnum.pending },
  role: {
    type: String,
    default: 'user',
    enum: Object.values(roleEnum),
    // validate: {
    //   validator: async (value, respond) => {
    //     if (value === roleEnum.admin) {
    //       try {
    //         const admin = await UserSchema.findOne({ role: value });
    //         return !admin;
    //       } catch (e) {
    //         throw e.message;
    //       }
    //     }
    //   },
    //   message: 'admin exists',
    // },
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  versionKey: false,
  // toJSON: {
  //   transform: function(doc, ret) {
  //     const { _id, username, surname, email, name, middleName, role } = ret;
  //     return {
  //       id: _id,
  //       username,
  //       email,
  //       name,
  //       surname,
  //       middleName,
  //       role,
  //     };
  //   },
  // },
});