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
        </div>

        <div className="bg-[#f6f7f6] p-10">
          <h2 className="container mx-auto">Proven Partners Across the Cell Therapy Ecosystem</h2>
          <ImageCard>
            <div className="p-10 w-1/2">
              <h3>CDMO Services</h3>
              <Image
                src={`${basePath}/Power-of-Partners.png`}
                width={500}
                height={100}
                alt="Your Image"
              />
            </div>
             <div className="p-10 w-1/2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet congue sapien, at eleifend velit congue dictum. Curabitur nec varius magna, et scelerisque tellus. Phasellus euismod, justo et pretium mattis, elit nunc pulvinar arcu, sit amet ultrices justo libero eget sapien. Aliquam mattis lorem turpis, in sollicitudin nulla fringilla sit amet. Aliquam euismod diam neque, ut vulputate mauris ultrices eget. Nullam rhoncus mauris sagittis mauris hendrerit sollicitudin. Nam eget enim elit. Mauris ac elit auctor lectus laoreet rutrum ut at est. Sed vehicula, mi ac tincidunt maximus, nunc ligula egestas tortor, sed dictum est ante et leo. Aenean sollicitudin nec quam eu eleifend.</p>
              <p>Aliquam eget ultrices nulla, posuere luctus mi. In molestie consequat ornare. Ut viverra, felis quis hendrerit rhoncus, enim lorem euismod metus, in condimentum erat mauris sed nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras purus ante, viverra eget cursus vitae, feugiat sed ex. Nullam ac ultricies nisl. Cras eget magna enim. Duis eu condimentum eros. Integer quis purus odio. Cras sit amet quam mattis, laoreet quam et, aliquet purus. Duis gravida eu metus quis aliquet. Integer faucibus mauris in lacus iaculis eleifend. Suspendisse sit amet pretium sem, in condimentum tortor. Vestibulum lorem elit, pretium id velit id, mollis volutpat arcu. Nam dui odio, posuere a nisi id, faucibus consequat ante.</p>
            </div>
          </ImageCard>
          <ImageCard>
            <div className="p-10 w-1/2">
              <h3>Products / Tools</h3>
              <Image
                src={`${basePath}/Products-Tools.png`}
                width={500}
                height={100}
                alt="Your Image"
              />
            </div>
             <div className="p-10 w-1/2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet congue sapien, at eleifend velit congue dictum. Curabitur nec varius magna, et scelerisque tellus. Phasellus euismod, justo et pretium mattis, elit nunc pulvinar arcu, sit amet ultrices justo libero eget sapien. Aliquam mattis lorem turpis, in sollicitudin nulla fringilla sit amet. Aliquam euismod diam neque, ut vulputate mauris ultrices eget. Nullam rhoncus mauris sagittis mauris hendrerit sollicitudin. Nam eget enim elit. Mauris ac elit auctor lectus laoreet rutrum ut at est. Sed vehicula, mi ac tincidunt maximus, nunc ligula egestas tortor, sed dictum est ante et leo. Aenean sollicitudin nec quam eu eleifend.</p>
              <p>Aliquam eget ultrices nulla, posuere luctus mi. In molestie consequat ornare. Ut viverra, felis quis hendrerit rhoncus, enim lorem euismod metus, in condimentum erat mauris sed nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras purus ante, viverra eget cursus vitae, feugiat sed ex. Nullam ac ultricies nisl. Cras eget magna enim. Duis eu condimentum eros. Integer quis purus odio. Cras sit amet quam mattis, laoreet quam et, aliquet purus. Duis gravida eu metus quis aliquet. Integer faucibus mauris in lacus iaculis eleifend. Suspendisse sit amet pretium sem, in condimentum tortor. Vestibulum lorem elit, pretium id velit id, mollis volutpat arcu. Nam dui odio, posuere a nisi id, faucibus consequat ante.</p>
            </div>
          </ImageCard>
        </div>

      </main>
      <Footer />
    </div>
  );
}
