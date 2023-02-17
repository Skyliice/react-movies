import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./LandingPage";


const routes = [
    { path: '/genres', component: IndexGenres, exact: true },
    { path: '/', component: LandingPage, exact: true}
];

export default routes;