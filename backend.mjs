import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function films() {
    const films = await pb.collection('Films').getFullList();
    return films;
}

export async function filmsOrder() {
    let films = await pb.collection('Films').getFullList({sort: 'Date'});
    films = films.map(film => {
      film.imgUrl = pb.files.getURL(film, film.image);
      // film.Date = formatDate(film.Date);
      return film;
    }
    );
    return films;
}

export async function ActOrder() {
    let films = await pb.collection('Activites').getFullList({sort: 'Date', expand: 'animateurs'});
    films = films.map(film => {
      film.imgUrl = pb.files.getURL(film, film.image);
      // film.Date = formatDate(film.Date);

      return film;
    }
    );
    return films;
}

export async function NameOrder() {
    let name = await pb.collection('Invite').getFullList({sort: 'Nom'});
    name = name.map(film => {
      film.imgUrl = pb.files.getURL(film, film.image);
      return film;
    }
    );
    return name;
}

export async function oneID(id) {
  let records = await pb.collection("Films").getOne(id) ;
  records.imgUrl = pb.files.getURL(records
    , records.image);
  return records ;
}

    export async function oneIDName(id) {
        let records = await pb.collection("Invite").getOne(id) ;
        records.imgUrl = pb.files.getURL(records
          , records.image);
        return records ;
        }

        export async function oneIDAct(id) {
            let records = await pb.collection("Activites").getOne(id) ;
            records.imgUrl = pb.files.getURL(records
              , records.image);
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

       export function formatDate (date) {
           // Formater la date en français
           const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
           const DateString = new Date(date).toLocaleDateString('fr-FR', options);
           return DateString;
       }         
              
       export async function mixOrders() {
       
        const [films, activites] = await Promise.all([filmsOrder(), ActOrder()]);
      
       
        const combined = [...films, ...activites];
      
        combined.sort((a, b) => new Date(a.Date) - new Date(b.Date));
      
        return combined;
      }
      
              

       