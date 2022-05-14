import api from '../api';

export async function getRocketsService (){
    try{
        const response = await api.get('https://api.spacexdata.com/v4/rockets')
        return response;
    } catch(error){
        console.log('error');
        console.log(error);
    }
}