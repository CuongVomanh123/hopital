import db from '../models/index'

class homeController  {
     async getHomePage  (req, res, next){
        try{
            let data = await db.User.findAll()    ;
            console.log('data ne',data)
            res.render('homepage',{
                data:JSON.stringify(data)
            })

        }catch(e){
            console.log(e)
        }

    
    }
     getAboutPage (req, res, next){
        res.render('test/about')
    }

}


module.exports = new homeController