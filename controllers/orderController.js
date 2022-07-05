import { addOrderService, getOrdersService } from "../services/orderService.js"


const addOrder = async (req, res, next) => {
    try {
        const { createdAt, product, quantity, price, user } = req.body;
        const order = await addOrderService(createdAt, product, quantity, price, user)
        return res.json(order)
    } catch (e) {
        next(e)
    }
}

const getAllOrders = async (req, res, next) => {
    try {
        const { query } = req;
        const filter = {};
        const orders = await getOrdersService(filter);
        return res.json({ data: orders })
    }
    catch (e) {
        res.json(e)
        next(e)
    }
}
export { addOrder, getAllOrders }
