import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allMaison() {
    const films = await pb.collection('Films').getFullList();
    return films;
}