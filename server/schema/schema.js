const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList}= require('graphql')
const clients=[{id:1,name:"fdad",email:"osk",phone:"kfksF"},{id:2,name:"fdascsd",email:"osCCsk",phone:"kfSCksF"}]
const ClientType= new GraphQLObjectType({
    name:'Client',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})


const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        clients:{
            type:new GraphQLList(ClientType),
            resolve(parents,args){
                    return clients
            }
        },
        client:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parents,args){
                return clients.find((client)=>client.id ==args.id   )
            }
        }
    }
})


module.exports=new GraphQLSchema({query:RootQuery   })