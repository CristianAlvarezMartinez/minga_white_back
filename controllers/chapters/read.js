let name = 'chapters'
let read = (req,res,next)=> res.status(200).render('index',{
    title: '/'+ name,
    subtitle: 'endpoints of Chapters'
})

export default read