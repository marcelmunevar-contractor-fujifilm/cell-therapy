import Header from "@/components/Header";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Image from "next/image";
export default function Home() {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/cell-therapy" : "";

  return (
    <div>
      <main>
        <div className="container mx-auto">
          <Header />
          <Masthead />
          <ImageCard>
            <Image
              src={`${basePath}/Power-of-Partners.png`}
              width={200}
              height={200}
              alt="Your Image"
            />
            <p>Lorem ipsum sit dolor amet</p>
          </ImageCard>
          <ImageCard>
            <Image
              src={`${basePath}/Products-Tools.png`}
              width={200}
              height={200}
              alt="Your Image"
            />
            <p>Lorem ipsum sit dolor amet</p>
          </ImageCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
