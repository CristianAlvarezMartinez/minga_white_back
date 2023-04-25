import heroImgs  from "../../models/Hero_imgs.js";

let read = async (req, res, next) => {
    try {
        let all = await heroImgs.find()
        return res.status(200)
            .json({
                imgs: all
            })
    } catch(error){
        console.log(error)
        return res.status(400)
            .json({
                error: 'Ha ocurrido un error'
            })
    }
}

export default read