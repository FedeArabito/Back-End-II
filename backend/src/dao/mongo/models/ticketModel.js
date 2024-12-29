import { model, Schema } from "mongoose";

const collection = "tickets";

const schema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
    default: function () {
      return `TICKET-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
  },
  purchase_datetime: {
    type: Date,
    default: Date.now,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  purchaser: {
    type: String,
    required: true
  }
});

const TicketModel = model(collection, schema);

export default TicketModel