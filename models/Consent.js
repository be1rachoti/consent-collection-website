const mongoose = require('mongoose');

const consentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    consentGiven: { type: Boolean, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consent', consentSchema);