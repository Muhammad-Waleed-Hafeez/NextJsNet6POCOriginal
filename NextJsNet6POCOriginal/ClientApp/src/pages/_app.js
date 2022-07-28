// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../components/Layout";
import '../styles/globals.css'
//import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
//import reportWebVitals from '../reportWebVitals';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

//serviceWorkerRegistration.unregister();

//reportWebVitals();