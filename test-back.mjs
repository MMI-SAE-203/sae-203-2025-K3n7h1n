import {films} from './backend.mjs';

try {
    const film = await films();
    console.log(film);
} catch (e) {
    console.error(e);
}