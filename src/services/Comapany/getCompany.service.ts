import api from '../api';

export async function getCompanyService (){
    try{
        const response = await api.get('https://api.spacexdata.com/v4/company')
        return response;
    } catch(error){
        console.log('error');
        console.log(error);
    }
}