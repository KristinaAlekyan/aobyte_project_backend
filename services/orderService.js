import OrderModel from "../models/order.js"

const addOrderService = async (createdAt, product, quantity, price, user) => {
    return await OrderModel.create({ createdAt, product, quantity, price, user })
}

const getOrdersService = async (filter) => {
    return await OrderModel.find(filter)
}

export { addOrderService, getOrdersService }
