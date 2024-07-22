const mongoose = require("mongoose");

const conatctSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "��ȭ��ȣ�� �� ������ �ּ���."],
    },
},
{
    timestamps: true
});

// ��Ű�� -> ��
// mongoose.model(�𵨸�, ��Ű����)
const Contact = mongoose.model(("Contact", conatactSchema));

module.exports = Contact;