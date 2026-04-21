import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LawLensProduct from './components/LawLensProduct';
import WhyItMatters from './components/WhyItMatters';
import CompanyProductRelationship from './components/CompanyProductRelationship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <LawLensProduct />
        <WhyItMatters />
        <CompanyProductRelationship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
