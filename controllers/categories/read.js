let name = 'categories'
let read = (req,res,next)=> res.status(200).render('index',{
    title: '/'+ name,
    subtitle: 'endpoints of Categories'
})

export default read