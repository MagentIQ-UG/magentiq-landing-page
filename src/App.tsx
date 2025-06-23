import Header from './components/Header';
import Hero from './components/Hero';
import CarsaLens from './components/CarsaLens';
import Solutions from './components/Solutions';
import WhyChooseMagentiq from './components/WhyChooseMagentiq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CarsaLens />
        <Solutions />
        <WhyChooseMagentiq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
