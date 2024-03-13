import axios from "axios";
import BaseURL from "./BaseURL"

const Path_URL = `${BaseURL}`;
const POST_PRODUCT_LIST = Path_URL+"/api/product/postProduct";

const ProductApiService = {
 postProductData : (details)=>{
        return axios.post(POST_PRODUCT_LIST,details);
       }
}

export default ProductApiService;

