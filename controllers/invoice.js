import asyncHandler from 'express-async-handler'
import Invoice from "../models/Invoice.js ";


// @desc    Create new Invoice
// @route   POST /api/orders
// @access  Public
const createInvoice = asyncHandler(async (req, res) => {

    const invoice = await Invoice.create(req.body)

    res.status(201).json({
        success: true,
        data: invoice
        }
    )
})

const listInvoice = asyncHandler(async (req, res) => {

    const invoice = await Invoice.find({})
    res.json(invoice)

})

const getInvoice = asyncHandler(async (req, res) => {

    const invoice = await Invoice.findById(req.params.id)
    if (invoice) {
        res.json(invoice)
    } else {
        res.status(404)
        throw new Error('Invoice not found')
    }
})

const deleteInvoice = asyncHandler(async (req, res) => {

    const invoice = await Invoice.findById(req.params.id)

    if (invoice) {
        await invoice.remove()
        res.json({message: 'Invoice deleted'})
    } else {
        res.status(404)
        throw new Error('Invoice not found')
    }
})

const updateInvoice = asyncHandler(async (req, res) => {

    const {
        paymentDue,
        description,
        paymentTerms,
        clientName,
        clientEmail,
        status,

    } = req.body
    const id = req.params.id
    const invoice = await Invoice.findOneAndUpdate({_id}, req.body, {new: true})

    res.json(invoice)

})



export {createInvoice, listInvoice, getInvoice, deleteInvoice, updateInvoice}
