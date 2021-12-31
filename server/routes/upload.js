const router = require('express').Router()
const cloudinary = require('cloudinary')
const userauthentication = require('../authentication/userauthentication')
const adminauthentication = require('../authentication/adminauthentication')
const fs = require('fs')


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

router.post('/upload',userauthentication , adminauthentication, (req, res) =>{
    try {
        if(!req.files || Object.keys(req.files).length === 0)
            return res.json({msg: 'No files were uploaded.'})
        
        const file = req.files.file;
        if(file.size > 1024*1024) {
            removeTmp(file.tempFilePath)
            return res.json({msg: "Size too large"})
        }

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.json({msg: "File format is incorrect."})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(error, result)=>{
            if(error) throw error;

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})
        })


    } catch (error) {
        return res.json({msg: error.message})
    }
})

router.post('/destroy',userauthentication , adminauthentication, (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.json({msg: 'No images Selected'})

        cloudinary.v2.uploader.destroy(public_id, async(error, result) =>{
            if(error) throw err;

            res.json({msg: "Deleted Image"})
        })

    } catch (error) {
        return res.json({msg: error.message})
    }
    
})


const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}

module.exports = router