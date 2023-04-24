let name = 'Authors'
let read = (req,res,next)=> res.status(200).render('index',{
    title: '/'+ name,
    subtitle: 'endpoints of Authors'
})

export default read