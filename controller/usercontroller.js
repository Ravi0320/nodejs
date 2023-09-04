
var usermodel = require('../model/usermodel');

exports.insert = async (req,res) => {

    var data = await usermodel.find({"email":req.body.email});

    if(data.length==0)
    {
        var data = await usermodel.create(req.body);

        res.status(200).json({
            status:"success",
            data
        })
    }
    else
    {
        res.status(200).json({
            status:"Your Email is register"
        })
    }

    
}

exports.select = async (req,res) => {

    var total_record = await usermodel.find().count();

    var page = Math.ceil(total_record/5);

    var page_no = req.query.page_no;

    if(page_no==undefined)
    {
        page_no=1;
    }

    var start = (page_no-1)*5;

    var data = await usermodel.find().limit(5).skip(start);

    res.status(200).json({
        status:"success",
        data,
        page
    })
}

exports.update = async (req,res) => {

    var id = req.params.id;

    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"success",
        data
    })
}

exports.delete_data = async (req,res) => {

    var id = req.params.id;

    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted",
    })
}

exports.select_id = async (req,res) => {

    var data = await usermodel.findById();

    res.status(200).json({
        status:"success",
        data
    })
}

exports.select_col = async (req,res) => {

    var data = await usermodel.find({"email":req.body.email});

    res.status(200).json({
        status:"success",
        data
    })
}

exports.select_col = async (req,res) => {



    var data = await usermodel.find().skip(5).limit(5);

    res.status(200).json({
        status:"success",
        data
    })
}

exports.search_data = async (req,res) =>{

    var name = req.params.name;

    var data = await usermodel.find({"name":name});
   
    res.status(200).json({
        status:"success",
        data
    })

}