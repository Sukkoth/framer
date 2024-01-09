import About from "./components/About";
import Clients from "./components/Clients";
import Collaboration from "./components/Collaboration";
import Divider, { DividerSmall } from "./components/Divider";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <main className='bg-stone-950 min-h-[100dvh] text-stone-100 text-lg pb-9'>
      <Nav />
      <Home />
      <Clients />
      <About />
      <Divider />
      <Services />
      <Portfolio />
      <DividerSmall />
      <Collaboration />
      <div className='mx-10 h-1 my-11 bg-grad bg-zinc-900'></div>
      <Footer />
    </main>
  );
}

export default App;
