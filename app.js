import axios from "axios"; // axios kütüphanesi istenildiği üzere kullanıldı

const getUser =async(id_) => {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+ id_);
    console.log(user);
};

const getPost = async(id_) => {
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id_}`);
    console.log(post); 
};

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