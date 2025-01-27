import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7f6]">

        <div className="flex p-6 text-4xl container mx-auto">
            <div className="border-t-2 border-[#e6e6e6] py-10">
                <Image src="/FF-Logo.svg" alt="Left Logo" width={192} height={52} />
            </div>
            <div className="border-t-2 border-[#e6e6e6] px-10 w-full py-10">
                <div className="text-base pb-3">
                    <ul className="flex flex-col md:flex-row md:gap-10">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Cookie Settings</a></li>
                    </ul>
                </div>
                <div className="text-xs">
                    ©FUJIFILM Holdings Corporation
                </div>
            </div>
      </div>
      
    </footer>
  );
}