import Header from "@/components/Header";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

import ImageCard from "@/components/ImageCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="container mx-auto">
          <Header />
          <Masthead />
        </div>

        <div className="bg-[#f6f7f6] p-5 ">
          <h2 className="container mx-auto text-2xl xl:text-4xl xl:pt-4 font-semibold">
            Proven Partners Across the Cell Therapy Ecosystem
          </h2>
          <ImageCard>
            <div className="flex flex-col md:flex-row">
              <div className="p-5 xl:p-10 md:w-1/2">
                <h3 className="text-[22px] xl:text-3xl font-semibold pb-8">
                  CDMO Services
                </h3>
                <Image
                  className="w-full"
                  src="/cell-therapy/CDMO-Services.png"
                  width={568}
                  height={230}
                  alt="Two workers wearing PPE stand in front of a white background, looking at a piece of laboratory equipment."
                />
              </div>
              <div className="p-5 xl:p-10 md:w-1/2">
                <p className="mb-4 text-lg md:text-sm xl:text-xl">
                  <a
                    href="https://fujifilmdiosynth.com/"
                    target="_blank"
                    className="text-ffk60 underline"
                  >
                    FUJIFILM Diosynth Biotechnologies
                  </a>{" "}
                  offers cell therapy expertise and focus on innovative,
                  future-proofed solutions. We partner with you to address the
                  challenges of complex cell therapy development and
                  manufacturing scalability. In an industry where rapidly
                  generating clinical data can be the difference between
                  advancing to Phase II or shelving a program, we can expedite
                  your development and GMP timelines with our module-based,
                  flexible platform solutions. Our end-to-end cell therapy CDMO
                  solutions cover pre-clinical development, early-phase
                  clinical, late-phase clinical, regulatory approval, and
                  commercial production.{" "}
                </p>
                <p className="mb-4 text-lg md:text-sm xl:text-xl">
                  <a
                    href="https://www.fujifilmcdi.com/"
                    target="_blank"
                    className="text-ffk60 underline"
                  >
                    FUJIFILM Cellular Dynamics
                  </a>{" "}
                  offers world-leading expertise to advance a wide range of
                  induced pluripotent stem cell (iPSC)-derived cell
                  therapeutics. Having supported multiple drug products from
                  early development to GMP manufacturing, release testing and
                  eventual regulatory submission, our experience provides
                  partners a one-stop shop for CDMO services in iPSC therapies.
                  Our new state-of-the-art facility is designed and built to
                  support the development and GMP compliant manufacture of cell
                  therapy products.
                </p>
              </div>
            </div>
          </ImageCard>
          <ImageCard>
            <div className="flex flex-col md:flex-row">
              <div className="p-5 xl:p-10 md:w-1/2">
                <h3 className="text-[22px] xl:text-3xl font-semibold pb-8">
                  Products / Tools
                </h3>
                <Image
                  className="w-full"
                  src="/cell-therapy/Products-Tools-v2.png"
                  width={568}
                  height={230}
                  alt="A man wearing a white coat and black gloves works with a piece of laboratory equipment."
                />
              </div>
              <div className="p-5 xl:p-10 md:w-1/2">
                <p className="mb-4 text-lg md:text-sm xl:text-xl">
                  <a
                    href="https://www.irvinesci.com/"
                    target="_blank"
                    className="text-ffk60 underline"
                  >
                    FUJIFILM Irvine Scientific, Inc.
                  </a>{" "}
                  provides customers with complete workflow solutions for the
                  development and commercialization of advanced therapies. From
                  culture media, growth factors, single-use technologies to
                  custom media services, our cell culture solutions are designed
                  and manufactured to facilitate transfer from research to
                  clinic. Deep industry experience allows us to assist our
                  partners with optimal protocols with time and cost savings for
                  manufacturing operations all aimed at achieving faster to
                  market solutions and regulatory compliance.
                </p>
                <p className="mb-4 text-lg md:text-sm xl:text-xl">
                  FUJIFILM Irvine Scientific, Inc. also offers products
                  manufactured by{" "}
                  <a
                    href="https://labchem-wako.fujifilm.com/us/index.html"
                    target="_blank"
                    className="text-ffk60 underline"
                  >
                    FUJIFILM Wako Pure Chemical Corporation
                  </a>
                  . This offering of cell therapy tools includes materials and
                  reagents for research and manufacturing. Such materials and
                  reagents include cytokines and small molecules. To meet
                  growing research demand, we also provide tools to purify and
                  detect exosomes.
                </p>
                <p className="mb-4 text-lg md:text-sm xl:text-xl">
                  We are inspired every day to keep innovating to bring our
                  customers more of what they need for cell therapy development
                  from discovery to delivery.
                </p>
              </div>
            </div>
          </ImageCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
