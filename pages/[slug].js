import SitePage from '../components/SitePage';
import { loadPage, pageNames } from '../lib/site-pages';
export default SitePage;
export function getStaticPaths() { return { paths: pageNames().map(slug => ({ params: { slug } })), fallback: false }; }
export function getStaticProps({ params }) { return { props: { page: loadPage(params.slug) } }; }
