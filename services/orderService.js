import OrderModel from "../models/order.js"

const createOrderService = async ( product, quantity, price, user) => {
    return await OrderModel.create({  product, quantity, price, user })
}

const getOrdersService = async (filter) => {
    return await OrderModel.find( filter ).populate("user").exec();
}

export { createOrderService, getOrdersService }
