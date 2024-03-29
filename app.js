import axios from "axios"; // axios kütüphanesi istenildiği üzere kullanıldı

//user
const getUser =async(id_) => {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+ id_);
    console.log(user);
};
//post
const getPost = async(id_) => {
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id_}`);
    console.log(post); 
};
//try-catch kullanımım pekişmesi için hemde bu örnekte işe yarayacağını düşündüğüm için.
function getData(id_) {
    try {
    const user = getUser(id_);
    const post = getPost(id_);
    }
    catch (error) {
        return(error);
    }
}

export default getData;