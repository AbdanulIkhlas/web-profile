import GradientHeader from "../elements/GradientHeader";
import Link from "next/link";
import DividerLine from "../elements/DividerLine";

const Footer = () => {
  return (
    <footer className="mt-10 pb-8">
      <img
        src="/images/logo/white-stepup-logo.png"
        alt="white stepup logo"
        className="w-[22px]"
      />
      <div className="mb-20">
        {/* Text Description */}
        <div className="mt-5 pe-16 mb-10">
          <GradientHeader customClassname="text-xs">
            Building the future of digital experiences—one pixel at a time.
            Elevate your brand with our innovative web solutions. Let’s make
            something extraordinary
          </GradientHeader>
        </div>

        <section>
          {/* About us & Connect */}
          <div className="w-full flex">
            {/* About Us */}
            <div className="w-3/5 ">
              <GradientHeader customClassname="text-sm w-max pr-5">
                About Us
              </GradientHeader>
              <div className="mt-4 flex flex-col gap-2 text-xs text-paragraphColor">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/insight">Insight</Link>
                <Link href="/about">About Us</Link>
              </div>
            </div>

            {/* Connect */}
            <div className="w-full ">
              <GradientHeader customClassname="text-sm w-max pr-5">
                Connect
              </GradientHeader>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex gap-1">
                  <img
                    src="/svg/email.svg"
                    alt="svg email"
                    className="w-[14px]"
                  />
                  <p className="text-xs text-paragraphColor">
                    stepup.project6@gmail.com
                  </p>
                </div>
                <div className="flex gap-1">
                  <img
                    src="/svg/instagram.svg"
                    alt="svg instagram"
                    className="w-[14px]"
                  />
                  <p className="text-xs text-paragraphColor">stepup.project</p>
                </div>
                <div className="flex gap-1">
                  <img
                    src="/svg/whatsapp.svg"
                    alt="svg whatsapp"
                    className="w-[14px]"
                  />
                  <p className="text-xs text-paragraphColor">082262191159</p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="mt-7">
            <GradientHeader customClassname="text-sm w-max pr-5">
              Privacy
            </GradientHeader>
            <div className="mt-4 flex flex-col gap-2 text-xs text-paragraphColor">
              {/* <Link href="/faq">FAQ</Link>
              <Link href="/term">Term</Link>
              <Link href="/privacy">Privacy</Link> */}
              <p>FAQ</p>
              <p>Term</p>
              <p>Privacy</p>
            </div>
          </div>
        </section>
      </div>
      <DividerLine/>
    </footer>
  );
};

export default Footer;
