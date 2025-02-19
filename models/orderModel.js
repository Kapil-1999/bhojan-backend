import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    items: { type: Array, require: true },
    amount: { type: Number, require: true },
    address: { type: Object, require: true },
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false }
})

const orderModel = mongoose.model("orders", userSchema)

export default orderModel