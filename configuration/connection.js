const MongoClient=require('mongodb').MongoClient
const state={db:null}

module.exports.connect=function(done){
    const url='mongodb+srv://vishnukv:Asmpvvaauatlas@cluster0.8juhmzx.mongodb.net/test'
    const dbname='shopping2'
    MongoClient.connect(url,(err,data)=>{
        if(err) return done (err)
        state.db=data.db(dbname)
        done()
    })
}
module.exports.get=function(){
    return state.db
}

