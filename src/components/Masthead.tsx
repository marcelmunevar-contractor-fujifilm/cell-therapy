import Image from "next/image";

export default function Header() {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/cell-therapy" : "";
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-12 mb-4">
        <h1 className="text-5xl font-semibold mb-4 max-w-lg">
          A <span className="text-ffgreen">Partner for Life</span>. Moving Cell
          Therapy Forward.
        </h1>
        <p className="mb-4 text-xl max-w-md">
          From discovery to commercialization, we advance cell therapies and
          transform human health with our partners worldwide.
        </p>
      </div>
      <Image
        className="w-full p-4 mb-12"
        src={`${basePath}/Hero-POV.png`}
        width={300}
        height={300}
        alt=""
      />
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div className="p-4 max-w-xs">
          <div
            className="w-36 h-1 bg-gradient-to-r from-transparent to-transparent mb-4"
            style={{
              background:
                "linear-gradient(90deg, #00d164 0%, #00d164 5%, #00ac5a 9%, #008551 14%, #006c4b 18%, #006449 20%, #007a5b 29%, #008b68 38%, #01916d 45%, #00956b 51%, #00a168 56%, #00b663 62%, #00d35c 68%, #00f853 74%, #00ff52 75%, #96fffd 95%, #96fffd 100%)",
              boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          <p className="uppercase mb-12 text-xl">The power of partners</p>
          <Image
            className="w-full "
            src={`${basePath}/Power-of-Partners.png`}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="text-3xl mb-4 max-w-lg">
            Trusted Solutions for Cell Therapy, End-to-end
          </h2>
          <p className="text-xl mb-4 max-w-xl xl:mr-24">
            Our technical experience and focus on innovative, future proofed
            solutions, offer you a single-point solution across cell therapy
            development and manufacturing.
          </p>
        </div>
      </div>
    </>
  );
}
