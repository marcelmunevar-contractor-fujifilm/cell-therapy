import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7f6]">
      <div className="container mx-auto px-6">
        <div className="bg-[#D6D6D6] h-px"></div>
      </div>

      <div className="flex flex-col md:flex-row p-6 container mx-auto">
        <Image
          className="mb-8 mt-1"
          src="/cell-therapy/FF-Logo.svg"
          alt="Left Logo"
          width={150}
          height={52}
        />

        <div className="md:px-10 text-[#515150] font-semibold">
          <div className="flex flex-col md:flex-row ">
            <div className="md:after:content-[''] md:after:border-r after:border-[#AEADAD] text-sm xl:text-[18px] pb-4">
              <a
                className="md:pr-4"
                href="https://www.fujifilm.com/us/en/privacy"
                target="_blank"
              >
                Privacy Policy
              </a>
            </div>
            <div className="md:after:content-[''] md:after:border-r after:border-[#AEADAD] text-sm xl:text-[18px] pb-4">
              <a
                className="md:px-4"
                href="https://www.fujifilm.com/us/en/terms"
                target="_blank"
              >
                Terms of Use
              </a>
            </div>
            <div className="text-sm xl:text-[18px] pb-8 md:pb-4">
              <a
                className="md:px-4"
                href="https://form.jotform.com/250336118551047"
                target="_blank"
              >
                Contact us
              </a>
            </div>
            <div className="text-sm xl:text-[18px] pb-8 md:pb-4 hidden">
              <a className="md:px-4" href="#">
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="text-sm xl:text-sm mb-4 font-normal">
            ©FUJIFILM Holdings Corporation
          </div>
        </div>
      </div>
    </footer>
  );
}
