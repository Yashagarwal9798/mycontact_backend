const asynchandler = require("express-async-handler")
const Contact = require("../models/contactmodel")
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asynchandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
//@desc create contacts
//@route POST /api/contacts
//@access public
const createcontact = asynchandler(async(req,res)=>{
    console.log("the req body is :", req.body)
    const {email,name,phone}=req.body
    if(!email || !name || !phone){
        res.status(400);
        throw new Error("all file manditory");
    }
    const contact = await Contact.create({email,name,phone});
    res.status(201).json(contact);
});
//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asynchandler(async(req,res)=>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contacts);
});
//@desc update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asynchandler(async(req,res)=>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error("contact not found")
    }
    const updatecontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatecontact);
});
//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asynchandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await contact.deleteOne(); // Proper deletion

    res.status(200).json({ message: "Contact deleted successfully" });
});
module.exports={
    getContacts,createcontact,updateContact,deleteContact,getContact
};
