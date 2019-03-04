module.exports={
    dbuser:"anabelparedes",
    dbpassword:"WviBu9QfhmpJ0oLM",
    Url : function (){
       // var url = "mongodb+srv://"+ this.dbuser+":"+ this.dbpassword + "@clustergastospersonales-gqibo.gcp.mongodb.net/gastos-personales?retryWrites=true"
       var url= "mongodb+srv://" + this.dbuser+":" + this.dbpassword + "@cluster0-n146d.mongodb.net/gastos-personales?retryWrites=true"
       //var url="mongodb://yess:UUbqdN9RQ5G0XveF@cluster0-shard-00-00-n146d.mongodb.net:27017,cluster0-shard-00-01-n146d.mongodb.net:27017,cluster0-shard-00-02-n146d.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
       return url;
    }
}