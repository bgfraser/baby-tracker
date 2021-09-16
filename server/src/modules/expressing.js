import { Schema, model } from 'mongoose';
import { eventHandler } from './';

export const schema = new Schema(
  {
    babyId: String,
    date: { type: Date, default: Date.now },
    amount: Number,
    breast: {
      type: String,
      enum: ['right', 'left', 'both'],
      default: 'right',
    },
  },
  {
    timestamps: true,
  }
);

export const Model = model('Expressing', schema);

export function handler(socket) {
  eventHandler(socket, 'expressing', Model);
}
export default {
  schema,
  Model,
  handler,
};
