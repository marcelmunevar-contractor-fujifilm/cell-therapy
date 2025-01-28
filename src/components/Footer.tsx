import Image from "next/image";

export default function Footer() {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/cell-therapy" : "";
  return (
    <footer className="bg-[#f6f7f6]">
      <div className="flex p-6 container mx-auto">
        <div className="border-t-2 border-[#e6e6e6] py-10">
          <Image
            src={`${basePath}/FF-Logo.svg`}
            alt="Left Logo"
            width={192}
            height={52}
          />
        </div>
        <div className="border-t-2 border-[#e6e6e6] px-10 w-full py-10 ">
          <div className="flex flex-col md:flex-row mb-4">
            <div className="after:content-[''] after:border-r after:border-[#AEADAD] after:text-base">
              <a className="pr-4" href="#">
                Privacy Policy
              </a>
            </div>
            <div className="after:content-[''] after:border-r after:border-[#AEADAD] after:text-base">
              <a className="px-4" href="#">
                Terms of Use
              </a>
            </div>
            <div className="after:content-[''] after:border-r after:border-[#AEADAD] after:text-base">
              <a className="px-4" href="#">
                Contact us
              </a>
            </div>
            <div>
              <a className="px-4" href="#">
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="text-xs">©FUJIFILM Holdings Corporation</div>
        </div>
      </div>
    </footer>
  );
}
