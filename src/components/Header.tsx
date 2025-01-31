import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center p-4 my-4 gap-16 sm:gap-8">
        <div>
          <Image
            src="/cell-therapy/FF-Logo.svg"
            alt="Left Logo"
            width={192}
            height={52}
          />
        </div>
        <div>
          <Image
            src="/cell-therapy/PFL-Logo.svg"
            alt="Right Logo"
            width={322}
            height={44}
          />
        </div>
      </div>
      <div
        className="w-full h-2 bg-gradient-to-r from-transparent to-transparent mb-8"
        style={{
          background:
            "linear-gradient(90deg, #00d164 0%, #00d164 5%, #00ac5a 9%, #008551 14%, #006c4b 18%, #006449 20%, #007a5b 29%, #008b68 38%, #01916d 45%, #00956b 51%, #00a168 56%, #00b663 62%, #00d35c 68%, #00f853 74%, #00ff52 75%, #96fffd 95%, #96fffd 100%)",
        }}
      ></div>
    </header>
  );
}
