let name = 'mangas'
let read = (req,res,next)=> res.status(200).render('index',{
    title: '/'+ name,
    subtitle: 'endpoints of Mangas'
})

export default read