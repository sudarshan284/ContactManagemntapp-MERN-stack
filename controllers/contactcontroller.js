const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// we will wite a description for the getall contacts.
// route get api/contacts
// accesss we can define , private or public.
const getcontact = asyncHandler( async (req,res) => {
    const contact = await Contact.find();
    res.status(200).json({contact})
});



// we will wite a description for the create contacts.
// route get api/contacts
// accesss we can define , private or public.
const createcontact = asyncHandler(async(req,res) => {
    console.log("Our request body is :",req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json({contact});
});




const getcontactbyid = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});




const updatecontact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updatecontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}

    );
    res.status(200).json({updatecontact});
});




const deletecontact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
});

module.exports = {deletecontact,updatecontact,getcontactbyid,createcontact,getcontact};