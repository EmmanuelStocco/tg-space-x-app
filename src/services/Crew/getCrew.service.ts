import api from '../api';

export async function getCrewService (){
    try{
        const response = await api.get('https://api.spacexdata.com/v4/crew')
        return response;
    } catch(error){
        console.log('error');
        console.log(error);
    }
}