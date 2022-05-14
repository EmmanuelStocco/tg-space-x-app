import api from '../api';

export async function getDragonsService (){
    try{
        const response = await api.get('https://api.spacexdata.com/v4/dragons')
        return response;
    } catch(error){
        console.log('error');
        console.log(error);
    };
};