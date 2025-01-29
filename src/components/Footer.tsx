import Image from "next/image";

export default function Footer() {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/cell-therapy" : "";
  return (
    <footer className="bg-[#f6f7f6]">
      
      <div className="container mx-auto px-6">
        <div className="bg-[#D6D6D6] h-px"></div>
      </div>


      <div className="flex flex-col md:flex-row p-6 container mx-auto">
        
        <Image className="mb-8 mt-1"
          src={`${basePath}/FF-Logo.svg`}
          alt="Left Logo"
          width={150}
          height={52}
        />
        
        <div className="md:px-10">
          <div className="flex flex-col md:flex-row ">
            <div className="md:after:content-[''] md:after:border-r after:border-[#AEADAD] after:text-base pb-4 md:pb-2">
              <a className="md:pr-4" href="#">
                Privacy Policy
              </a>
            </div>
            <div className="md:after:content-[''] md:after:border-r after:border-[#AEADAD] after:text-base pb-4 md:pb-2">
              <a className="md:px-4" href="#">
                Terms of Use
              </a>
            </div>
            <div className="md:after:content-[''] md:after:border-r after:border-[#AEADAD] after:text-base pb-4 md:pb-2">
              <a className="md:px-4" href="#">
                Contact us
              </a>
            </div>
            <div className="pb-8 md:pb-2">
              <a className="md:px-4" href="#">
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="text-xs mb-4">©FUJIFILM Holdings Corporation</div>
        </div>

      </div>

    </footer>
  );
}
