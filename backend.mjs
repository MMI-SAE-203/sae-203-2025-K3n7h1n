import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function films() {
    const films = await pb.collection('Films').getFullList();
    return films;
}

export async function filmsOrder() {
    const films = await pb.collection('Films').getFullList({sort: 'Date'});
    return films;
}

export async function ActOrder() {
    const films = await pb.collection('Activites').getFullList({sort: 'Date'});
    return films;
}

export async function NameOrder() {
    const films = await pb.collection('Invite').getFullList({sort: 'Nom'});
    return films;
}

export async function oneID(id) {
    const records = await pb.collection("Films").getOne(id) ;
    return records ;
    }

    export async function oneIDName(id) {
        const records = await pb.collection("Invite").getOne(id) ;
        return records ;
        }

        export async function oneIDAct(id) {
            const records = await pb.collection("Activites").getOne(id) ;
            return records ;
            }

            export async function getActivitiesByAnimator(id) {
                const activities = await pb.collection('Activites').getFullList({
                  filter: `animateurs = "${id}"`
                });
                return activities;
              }

              export async function getActivitiesByAnimatorname(Nom) {
                const activities = await pb.collection('Activites').getFullList({
                  filter: `animateurs = "${Nom}"`
                });
                return activities;
              }

              export async function saveGuest() {
                  const newGuest = await pb.collection('Invite').create();
                  return newGuest;
                }
              

              