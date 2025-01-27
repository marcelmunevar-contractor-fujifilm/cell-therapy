import Header from "@/components/Header";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <div className="container mx-auto">
          <Header />
          <Masthead />
        </div>
      </main>
      <Footer />
    </div>
  );
}
