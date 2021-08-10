import axios from 'axios'
let usersUrl = 'https://jsonplaceholder.typicode.com/users'
let todosUrl = 'https://jsonplaceholder.typicode.com/todos'
let testUrl = 'https://jsonplaceholder.typicode.com/posts'

const getAll = async (url) => 
{
    let resp = await axios.get(url)
    return resp.data
    
}
const getById = async (url) => {
    let resp = await axios.get(url)
    return resp.data
}
const getTodos = async (id) => {
    let allTodos = await getAll('https://jsonplaceholder.typicode.com/todos')
    let allUserTodos = allTodos.filter(todo => todo.userId == id)
    allUserTodos.forEach(todo => 
        delete todo.userId
        )
    return allUserTodos;

}
const getPosts = async (id) => {
    let allPosts = await getAll('https://jsonplaceholder.typicode.com/posts')
    let allUserPosts = allPosts.filter(post => post.userId == id)
     allUserPosts.forEach(post =>
        delete post.userId)
    return allUserPosts
}

const getUserAllData = async () => {
    let allUsers = await getAll('https://jsonplaceholder.typicode.com/users')
    let usersShaped= allUsers.map(user => {
        let obj = {
            id : user.id ,
            name : user.name ,
            email : user.email , 
            address : { 
                street : user.address.street ,
                city : user.address.city ,
                zipcode : user.address.zipcode
            },
            todos : [],
            posts : []
        }

        return obj
    }) 
    usersShaped.forEach(async user => {
        user.todos = await getTodos(user.id)
        user.posts = await getPosts(user.id)
    });

        
    
    

      return usersShaped;  
    
}

export default {getAll,getById,getTodos,getPosts,getUserAllData}