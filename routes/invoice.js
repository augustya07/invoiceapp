import express from "express";
const router = express.Router()

import {createInvoice, deleteInvoice, getInvoice, listInvoice, updateInvoice} from "../controllers/invoice.js";

router.route('/').post(createInvoice).get(listInvoice)
router.route('/:id').get(getInvoice).delete(deleteInvoice).put(updateInvoice)

export default router