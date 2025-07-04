const express = require('express');
const router = express.Router();
const {
    getContacts,
    createcontact,
    updateContact,
    deleteContact,
    getContact
    
}= require("../controller/contactconttroller")

router.route("/").get(getContacts);
router.route("/:id").get(getContact);
router.route("/").post(createcontact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports= router;