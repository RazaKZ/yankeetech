import SitePage from '../components/SitePage';
import { loadPage } from '../lib/site-pages';
export default SitePage;
export function getStaticProps() { return { props: { page: loadPage('404.html') } }; }
