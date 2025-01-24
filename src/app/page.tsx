import Header from "@/components/Header";
import Masthead from "@/components/Masthead";

export default function Home() {
  return (
    <div>
      <main>
        <div className="container mx-auto">
          <Header />
          <Masthead />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
