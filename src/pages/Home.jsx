import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../components";
import C1440pxFaqs from "../components/C1440pxFaqs";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import { useState ,useEffect} from "react";
export default function PxPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Helmet>
        <title>LandingPage</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <header className="flex items-center justify-center bg-deep_purple-500 p-[26px] sm:p-5">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 md:flex-col">
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className={`h-[25px] w-${isMobile ? "full" : "[19%] md:w-full"}`}
            />
            <ul
              className={`flex ${isMobile ? "flex-col" : "flex-wrap"} gap-7 ${
                isMobile ? "mt-5" : "md:mt-0"
              }`}
            >
              <li className={`md:ml-${isMobile ? "0" : "8"} text-xl`}>
                <a
                  href="/Services"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  <Text as="p">SERVICES</Text>
                </a>
              </li>
              <li className={`md:ml-${isMobile ? "0" : "8"} text-xl`}>
                <a href="/Aboutus">
                  <Text as="p">ABOUT US</Text>
                </a>
              </li>
              <li className={`md:ml-${isMobile ? "0" : "8"} text-xl`}>
                <a href="/ContactUs">
                  <Text as="p">CONTACT US</Text>
                </a>
              </li>
              <li className={`md:ml-${isMobile ? "0" : "8"} text-xl`}>
                <a href="/Careers">
                  <Text as="p">CAREERS</Text>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
          <div className="flex h-[700px] items-end self-stretch bg-[url(/public/images/img_hero_image.png)] bg-cover bg-no-repeat p-10 md:h-auto sm:p-5">
            <div className="ml-10 mt-[314px] flex w-[48%] flex-col items-start gap-5 bg-gradient p-6 md:ml-0 md:w-full sm:p-5">
              <Heading
                size="md"
                as="h1"
                className="ml-4 w-[98%] capitalize leading-[100%] tracking-[-0.96px] !text-white-A700 md:ml-0 md:w-full"
              >
                We crush your competitors, goals, and sales records - without
                the B.S.
              </Heading>
              <Button shape="round" className="mb-2 ml-4 min-w-[214px] md:ml-0">
                Get free consultation
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1064px] flex-col items-center gap-[79px] md:gap-[59px] md:p-5 sm:gap-[39px]">
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <Img
                src="images/img_image_2.png"
                alt="imagetwo_one"
                className="h-[414px] w-[414px] object-cover md:w-full"
              />
              <div className="flex w-[51%] flex-col items-start gap-4 md:w-full">
                <div className="flex pr-[53px] md:pr-5">
                  <Heading as="h2" className="tracking-[0.40px]">
                    Web & Mobile App Development
                  </Heading>
                </div>
                <Text size="s" as="p" className="!text-black-900">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and
                  engagement methods to respond to different intents shown by
                  your potential customers who interact with your business
                  online.
                </Text>
                <Button shape="round" className="min-w-[129px]">
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[51%] flex-col items-start gap-[15px] md:w-full">
                <div className="flex">
                  <Heading as="h3" className="tracking-[0.40px]">
                    Digital Strategy Consulting
                  </Heading>
                </div>
                <Text size="s" as="p" className="!text-black-900">
                  Your digital strategy should complement the overall marketing
                  strategy of the company. In online marketing, each component
                  will never work in isolation and every business needs a
                  different mix. We provide a clear concept and strategic
                  overview to find the most efficient model for your business.
                </Text>
                <Button shape="round" className="min-w-[129px]">
                  LEARN MORE
                </Button>
              </div>
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="h-[416px] w-[39%] object-cover md:w-full"
              />
            </div>
            <div className="flex w-[80%] flex-col items-center gap-[21px] md:w-full">
              <Heading as="h4" className="tracking-[0.40px]">
                Frequently asked questions
              </Heading>
              <Accordion
                preExpanded={[0]}
                className="flex flex-col gap-[15px] self-stretch"
              >
                {[...Array(3)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistw${i}`}>
                    <C1440pxFaqs className="flex flex-1 flex-col gap-[11px] rounded-[7px] bg-gray-50 p-6 sm:p-5" />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <footer className="mt-20 flex items-center justify-center bg-deep_purple-500 p-[18px]">
          <div className="mt-5 flex w-[91%] flex-col items-center justify-center gap-10 md:w-full">
            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[32%] flex-col gap-5 md:w-full">
                <Img
                  src="images/img_logo.svg"
                  alt="logo_three"
                  className="h-[25px] w-[58%]"
                />
                <Text size="s" as="p" className="!font-lato">
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </Text>
              </div>
              <div className="flex w-[41%] items-start justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex flex-col items-start gap-[9px]">
                  <Heading size="xs" as="h5" className="!text-white-A700">
                    Our Technologies
                  </Heading>
                  <div className="flex flex-col items-start gap-3">
                    <a href="ReactJS" target="_blank" rel="noreferrer">
                      <Text as="p" className="capitalize">
                        ReactJS
                      </Text>
                    </a>
                    <a href="Gatsby" target="_blank" rel="noreferrer">
                      <Text as="p" className="capitalize">
                        Gatsby
                      </Text>
                    </a>
                    <a href="NextJS" target="_blank" rel="noreferrer">
                      <Text as="p" className="capitalize">
                        NextJS
                      </Text>
                    </a>
                    <a href="NodeJS" target="_blank" rel="noreferrer">
                      <Text as="p" className="capitalize">
                        NodeJS
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex w-[38%] flex-col items-start gap-[11px] sm:w-full">
                  <Heading size="xs" as="h5" className="!text-white-A700">
                    Our Services
                  </Heading>
                  <div className="flex flex-col items-start gap-[11px] self-stretch">
                    <a href="/SocialMedia">
                      <Text as="p" className="capitalize">
                        Social media Marketing
                      </Text>
                    </a>
                    <Text as="p" className="capitalize">
                      Web & Mobile App Development
                    </Text>
                    <a href="/DataAnalytics">
                      <Text as="p" className="capitalize">
                        Data & Analytics
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[49%] flex-col items-center gap-[7px] md:w-full">
              <div className="h-px w-full self-stretch bg-white-A700" />
              <div className="flex items-center gap-4">
                <a href="/PrivacyPolicy" className="self-end">
                  <Text as="p" className="capitalize">
                    Privacy Policy
                  </Text>
                </a>
                <div className="h-[16px] w-px self-start bg-white-A700" />
                <a href="/TermsandCondition" className="self-start">
                  <Text as="p" className="capitalize">
                    Terms & Conditions
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
