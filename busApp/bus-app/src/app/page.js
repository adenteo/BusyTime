import Image from "next/image";
import BusHome from "./components/BusHome";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
// import image from "../public/image.png";
// <div className = "relative">
// <Image src={image} />
// </div>

export default function Home() {
  return (
    <main className="">
      <header className=" sticky top-0 ">
        <Navbar />
      </header>
      <section id="homePage" className="h-screen">
        <BusHome />
      </section>
      <section id="helpPage" className="h-screen">
        <About />
      </section>
      <section id="contactPage" className="h-screen">
        <Contact />
      </section>
    </main>
  );
}
