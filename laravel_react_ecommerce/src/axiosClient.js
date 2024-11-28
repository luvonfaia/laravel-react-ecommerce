import axios from "axios";


const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.request.use(
    
    (reponse) => {
        return reponse;
    },
    (error) => {
        try{
        const {reponse} = error;
        
        if (reponse.status === 401){
            localStorage.removeItem('ACCESS_TOEKN');

        }
    }catch(err){
        console.log(err);
    }
        throw error;
    }

)

export default axiosClient;