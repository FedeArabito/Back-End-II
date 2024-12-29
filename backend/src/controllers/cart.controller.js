import { createService, readService, updateService, destroyService } from "../services/cart.service.js"

async function createCart(req, res) {
  const message = "CART CREATED";
  const data = req.body;
  const response = await createService(data)
  return res.status(201).json({ response, message });
}
async function readCartsFromUser(req, res) {
  const { user_id } = req.params;
  const message = "CARTS FOUND";
  console.log(user_id);
  const response = await readService(user_id)
  console.log(response);

  return res.status(200).json({ response, message });
}
async function updateCart(req, res) {
  const { id } = req.params;
  const data = req.body;
  const message = "CART UPDATED";
  const response = await updateService(id, data)
  return res.status(200).json({ response, message });
}
async function destroyCart(req, res) {
  const { id } = req.params;
  const message = "CART DELETED";
  const response = await destroyService(id)
  return res.status(200).json({ response, message });
}

async function purchaseCart(req, res) {
  const { cid } = req.params;
  const cart = await readService(cid);
  if (!cart) return res.status(404).json({ status: "Error", msg: `No se encontró el carrito con el id ${cid}` });
  const total = await purchaseService(cid);
  if (total === 0) return res.status(400).json({ status: "error", msg: "No stock suficiente para comprar los productos" });
  const ticket = await ticketService.createTicket(total, req.user.email);
  const message = "CART PURCHASED";
  res.status(200).json({ ticket, message });
}
export { createCart, readCartsFromUser, updateCart, destroyCart, purchaseCart };
