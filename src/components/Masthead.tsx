import Image from "next/image";
import Vimeo from "./Vimeo";

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-5 xl:p-12 mb-4 gap-8">
        <h1 className="text-4xl  xl:text-5xl font-semibold sm:w-[420px] lg:w-[400px] xl:w-[520px]">
          A <span className="text-ffk60">Partner for Life</span>. Moving Cell
          Therapy Forward.
        </h1>
        <p className=" text-lg xl:text-xl md:mr-10  xl:mr-20 md:w-[400px] xl:w-[520px]">
          From discovery to commercialization, we advance cell therapies and
          transform human health with our partners worldwide.
        </p>
      </div>
      <Image
        className="w-full mb-10 xl:mb-20 md:p-5 hidden sm:block"
        src="/cell-therapy/Hero-POV.png"
        width={1719}
        height={484}
        alt="Two workers wearing PPE stand in front of a white background, looking at a piece of laboratory equipment."
        loading="eager"
      />
      <Image
        className="w-full mb-10 xl:mb-20 md:p-5 block sm:hidden"
        src="/cell-therapy/Hero-POV-mobile.png"
        width={390}
        height={281}
        alt="Two workers wearing PPE stand in front of a white background, looking at a piece of laboratory equipment."
        loading="eager"
      />
      <div className="flex flex-col md:flex-row md:mb-20 justify-between ">
        <div className="md:w-1/2 p-5">
          <div
            className="w-36 h-1 bg-gradient-to-r from-transparent to-transparent mb-5"
            style={{
              background:
                "linear-gradient(90deg, #00d164 0%, #00d164 5%, #00ac5a 9%, #008551 14%, #006c4b 18%, #006449 20%, #007a5b 29%, #008b68 38%, #01916d 45%, #00956b 51%, #00a168 56%, #00b663 62%, #00d35c 68%, #00f853 74%, #00ff52 75%, #96fffd 95%, #96fffd 100%)",
            }}
          ></div>
          <p className="uppercase mb-4 text-xl lg:text-2xl">
            The power of partners
          </p>
          <Vimeo />
        </div>

        <div className="md:w-1/2 p-5">
          <h2 className="text-2xl xl:text-4xl mb-5 max-w-xl">
            Trusted Solutions for Cell Therapy, End&#8209;to&#8209;end
          </h2>
          <p className="mb-5 text-lg md:text-sm xl:text-xl max-w-xl">
            Our technical experience and focus on innovative, future proofed
            solutions, offer you a single-point solution across cell therapy
            development and manufacturing.
          </p>
        </div>
      </div>
    </>
  );
}
