import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-between p-16 mb-4">
        <h1 className="text-5xl font-semibold mb-4 max-w-2xl">
          A <span className="text-ffgreen">Partner for Life</span>. Moving Cell
          Therapy Forward.
        </h1>
        <p className="mb-4 text-2xl max-w-xl">
          From discovery to commercialization, we advance cell therapies and
          transform human health with our partners worldwide.
        </p>
      </div>
      <Image
        className="w-full p-4"
        src="/Hero-POV.png"
        width={300}
        height={300}
        alt=""
      />
      <div className="flex flex-col md:flex-row justify-between p-16 mb-4">
        <div>
          <div
            className="w-32 h-1 bg-gradient-to-r from-transparent to-transparent"
            style={{
              background:
                "linear-gradient(90deg, #00d164 0%, #00d164 5%, #00ac5a 9%, #008551 14%, #006c4b 18%, #006449 20%, #007a5b 29%, #008b68 38%, #01916d 45%, #00956b 51%, #00a168 56%, #00b663 62%, #00d35c 68%, #00f853 74%, #00ff52 75%, #96fffd 95%, #96fffd 100%)",
              boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          <p>The power of partners</p>
          <Image
            className="w-full p-4"
            src="/Power-of-Partners.png"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl">
            Trusted Solutions for Cell Therapy, End-to-end
          </h2>
          <p>
            Our technical experience and focus on innovative, future proofed
            solutions, offer you a single-point solution across cell therapy
            development and manufacturing.
          </p>
        </div>
      </div>
    </>
  );
}
