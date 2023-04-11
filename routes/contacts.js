const express = require('express');    
const router = express.Router();    //These are the middlewares.

const {deletecontact,updatecontact,getcontactbyid,createcontact,getcontact} =  require("../controllers/contactcontroller"); 

router.route("/").get(getcontact);

router.route("/").post(createcontact);

router.route("/:id").get(getcontactbyid);

router.route("/:id").put(updatecontact);

router.route("/:id").delete(deletecontact);

module.exports = router ;
