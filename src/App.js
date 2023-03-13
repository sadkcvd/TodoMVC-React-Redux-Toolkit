import './App.css';
import Content from './components/Content';
import ContentFooter from './components/ContentFooter';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <ContentFooter />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
