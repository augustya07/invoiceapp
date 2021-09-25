import mongoose from 'mongoose'

const InvoiceSchema = mongoose.Schema(
    {
        paymentDue: {
            type: Date,
            required: true,

        },
        description: {
          type: String,
          required: true,
        },
        paymentTerms: {
            type: Number,
            required: true,
        },
        clientName: {
            type: String,
            required: true,
        },
        clientEmail: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'draft',
            required: true,
            enum: [
                "draft",
                "pending",
                "paid"
            ]
        },
        senderAddress: {
            street: {type: String, required: true},
            city: {type: String, required: true},
            postCode: {type: String, required: true},
            country: {type: String, required: true}
        },
        clientAddress: {
            street: {type: String, required: true},
            city: {type: String, required: true},
            postCode: {type: String, required: true},
            country: {type: String, required: true}
        },
        items: [
            {
                name: {type: 'String', required: true},
                quantity: {type: 'String', required: true},
                price: {type: Number, required: true},
                total: {type: Number, required: true}
            }
        ],
        total: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const Invoice = mongoose.model('Invoice', InvoiceSchema)

export default Invoice