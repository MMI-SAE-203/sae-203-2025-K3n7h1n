import {films,filmsOrder,ActOrder,NameOrder,oneID,oneIDName,oneIDAct,getActivitiesByAnimator,getActivitiesByAnimatorname,saveGuest  } from './backend.mjs';

try {
    const film = await films();
    console.log(film);
} catch (e) {
    console.error(e);
}

try {
    const filmsTries = await filmsOrder();
    console.log(filmsTries);
  } catch (error) {
    console.error('Erreur lors de la récupération des films:', error);
  }

  try {
    const ActTries = await ActOrder();
    console.log(ActTries);
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
  }

  try {
    const ActTries = await NameOrder();
    console.log(ActTries);
  } catch (error) {
    console.error('Erreur lors de la récupération des invités:', error);
  }

  try {
    const ActTries = await oneID('4c4g1x89j415309');
    console.log(ActTries);
  } catch (error) {
    console.error('Erreur lors de la récupération des invités:', error);
  }

  try {
    const ActTries = await oneIDName('1i62465ce51vlhw');
    console.log(ActTries);
  } catch (error) {
    console.error('Erreur lors de la récupération des invités:', error);
  }

try {
        const ActTries = await oneIDAct('528gi11bqk5pch4');
        console.log(ActTries);
      } catch (error) {
        console.error('Erreur lors de la récupération des invités:', error);
      }

try {
    const activities = await getActivitiesByAnimator('qiu11ha7l628t26');
    console.log(activities);
  } catch (error) {
    console.error("Erreur lors de la récupération des activités :", error);
  }

try {
    const activities = await getActivitiesByAnimatorname("Rina Hoshino");
    console.log(activities);
  } catch (error) {
    console.error("Erreur lors de la récupération des activités :", error);
  }

try {
    // Exemple pour ajouter un nouvel invité
    const newGuestData = {
      Nom: "Jean Dupont",
      bio: "Expert en cinéma et critique reconnu."
    };
    const createdGuest = await saveGuest(newGuestData);
    console.log("Invité ajouté :", createdGuest);
}
catch (error) {
    console.error("Erreur lors de l'ajout de l'invité :", error);
}