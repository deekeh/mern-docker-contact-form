import { Footer, Header } from './components/Parts'
import ContactForm from './components/ContactForm'
import './style.css'
import {Helmet} from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>
          DK - Contact Form
        </title>
      </Helmet>
      <Header />
      <ContactForm></ContactForm>
      <Footer />
    </div>
  );
}

export default App;
