import Image from "next/image";

export default function Footer() {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/cell-therapy" : "";
  return (
    <footer className="bg-[#f6f7f6]">
      
      <div className="container mx-auto px-6">
        <div className="bg-[#D6D6D6] h-px"></div>
        
        <div className="flex py-10">
          <Image
            src={`${basePath}/FF-Logo.svg`}
            alt="Footer Logo"
            width={150}
            height={52}
          />
          
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
