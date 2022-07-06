import { createOrderService, getOrdersService } from "../services/orderService.js"

const createOrder = async (req, res, next) => {
    try {
        const { product, quantity, price, user } = req.body;
        const order = await createOrderService( product, quantity, price, user)
        return res.json(order)
    } catch (e) {
        next(e)
    }
}

const getOrders = async (req, res, next) => {
    try {
        const { query } = req;
        const user = query.user
        const filter = {user};
        const orders = await getOrdersService(filter);
        return res.json({ data: orders })
    }
    catch (e) {
        res.json(e)
        next(e)
    }
}
export { createOrder, getOrders }
