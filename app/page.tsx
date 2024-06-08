import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Index from "./components/mosaic/Index"


export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="container mx-auto py-4 items-center justify-center">
      <Hero />
      <div className="flex items-center justify-center">
          <h1 className="text-4xl text-blue-500 font-urban mb-1.5">Projects</h1>
      </div>
      <Index/>
        {/* <YourComponent/> */}
      </main>
      <Footer/>
    </div>
  );
}
