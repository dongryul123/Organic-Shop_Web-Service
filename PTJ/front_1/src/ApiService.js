import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";
const PRODUCT_API_BASE_URL = "http://localhost:8080/products"
//const USER_API_BASE_URL = "http://15.165.238.196:8080/users"; // EC2 탄력적 IP (고정 IP)

class ApiService{
    
    // 회원 부분

    fetchUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    fetchUsersByID(userID){
        return axios.get(USER_API_BASE_URL + '/' + userID);
    }

    deleteUser(userID){
        return axios.delete(USER_API_BASE_URL +'/' + userID);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    editUsers(user){
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

    // 상품 부분

    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProduct(){
        return axios
            .get(PRODUCT_API_BASE_URL)
            .then( res => {
                //alert("상품 조회 성공");
                // console.log("상품 조회 성공");
                var temp = JSON.stringify(res.data);
                var temp2 = JSON.parse(temp);
                //console.log(JSON.stringify(res.data));
                //console.log(typeof(JSON.stringify(res.data)));
                //console.log(temp2);
                // return JSON.parse(JSON.stringify(res.data));
                return temp2;
              })
              .catch(err => {
                  alert("다시 기입해주세요.");
                  console.log('saveUser() 에러', err);
              });
    }
}

export default new ApiService();
