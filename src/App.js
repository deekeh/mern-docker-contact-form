import { Footer, Header } from './components/Parts'
import ContactForm from './components/ContactForm'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <ContactForm></ContactForm>
      <Footer />
    </div>
  );
}

export default App;
