let name = 'companies'
let read = (req,res,next)=> res.status(200).render('index',{
    title: '/'+ name,
    subtitle: 'endpoints of Companies'
})

export default read