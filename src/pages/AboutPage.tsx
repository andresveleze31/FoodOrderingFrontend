import DynamicHero from "@/components/DynamicHero";
import AboutImage from "../assets/about-img.jpg";
import StepOne from "../assets/setp-img1.png";
import StepTwo from "../assets/setp-img2.png";
import StepThree from "../assets/setp-img3.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImgOne from "../assets/img-1.jpg";
import ImgTwo from "../assets/img-2.jpg";
import ImgThree from "../assets/img-3.jpg";
import ImgFour from "../assets/img-4.jpg";
import ImgFive from "../assets/img-5.jpg";
import ImgSix from "../assets/img-6.jpg";

import ResOne from "../assets/res-1.png";
import ResTwo from "../assets/res-2.png";
import ResThree from "../assets/res-3.png";
import ResFour from "../assets/res-4.png";
import ResFive from "../assets/res-5.png";
import ResSix from "../assets/res-6.png";

import Autoplay from "embla-carousel-autoplay";

const AboutPage = () => {
  return (
    <div>
      <DynamicHero
        title={"About Us"}
        subtitle="A Greate Restaurant Website
"
      />

      <div className="bg-slate-100 py-[4rem] ">
        <div className="contenedor rounded-xl bg-white p-[5rem] flex-col items-center ">
          <h2 className="font-semibold text-center">
            We Are Provide Food Online Service
          </h2>
          <div className="flex justify-center">
            <img src={AboutImage} alt="About Image" />
          </div>

          <h3 className="text-red-950 font-semibold text-center mt-[2rem] ">
            Easy 3 Step Order
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
            <div className="flex flex-col gap-[2rem] items-center">
              <div className="relative flex items-center justify-center">
                <img
                  className="w-[12.1rem] h-[11.6rem] "
                  src={StepOne}
                  alt="Step"
                />
                <div className="absolute  flex items-center  justify-center bg-red-600 bottom-[-1rem] px-[1.5rem] py-[0.6rem] text-white font-bold text-[1.5rem] rounded-full">
                  1
                </div>
              </div>
              <p className="font-bold text-[2rem] mb-0 text-center ">
                Explore Restaurants
              </p>
              <p className="text-[1.4rem] text-center leading-[3rem] text-gray-400">
                Discover the best dining experiences in your area! Whether
                you're craving a cozy café, a trendy new eatery, or a hidden
                gem.
              </p>
            </div>
            <div className="flex flex-col gap-[2rem] items-center">
              <div className="relative flex items-center justify-center">
                <img
                  className="w-[12.1rem] h-[11.6rem] "
                  src={StepTwo}
                  alt="Step"
                />
                <div className="absolute  flex items-center  justify-center bg-red-600 bottom-[-1rem] px-[1.3rem] py-[0.6rem] text-white font-bold text-[1.5rem] rounded-full">
                  2
                </div>
              </div>
              <p className="font-bold text-[2rem] mb-0 text-center ">
                Choose a Tasty Dish
              </p>
              <p className="text-[1.4rem] text-center leading-[3rem] text-gray-400">
                Indulge your taste buds with our curated selection of
                mouthwatering dishes! From savory starters to sumptuous
                desserts.
              </p>
            </div>
            <div className="flex flex-col gap-[2rem] items-center">
              <div className="relative flex items-center justify-center">
                <img
                  className="w-[12.1rem] h-[11.6rem] "
                  src={StepThree}
                  alt="Step"
                />
                <div className="absolute  flex items-center  justify-center bg-red-600 bottom-[-1rem] px-[1.3rem] py-[0.6rem] text-white font-bold text-[1.5rem] rounded-full">
                  3
                </div>
              </div>
              <p className="font-bold text-[2rem] mb-0 text-center ">
                Follow the Status
              </p>
              <p className="text-[1.4rem] text-center leading-[3rem] text-gray-400">
                Stay updated with real-time tracking of your order or
                reservation status! From preparation to delivery or from booking
                to dining.
              </p>
            </div>
          </div>

          <Accordion className="mt-[2rem] w-full" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I place an order for delivery or takeout?
              </AccordionTrigger>
              <AccordionContent>
                To place an order, simply browse our menu online, add your
                desired items to your cart, and proceed to checkout. Choose
                delivery or takeout, provide your details, and complete the
                payment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What if there is an issue with my order?
              </AccordionTrigger>
              <AccordionContent>
                If you encounter any issues with your order, please contact our
                customer service team immediately. We are here to assist you and
                ensure you have a satisfactory experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, debit cards, and digital
                payment methods like Apple Pay and Google Pay.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-[4rem]">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img src={ImgOne} alt="Image" />
                </CarouselItem>
                <CarouselItem>
                  <img src={ImgTwo} alt="Image" />
                </CarouselItem>
                <CarouselItem>
                  <img src={ImgThree} alt="Image" />
                </CarouselItem>
                <CarouselItem>
                  <img src={ImgFour} alt="Image" />
                </CarouselItem>
                <CarouselItem>
                  <img src={ImgFive} alt="Image" />
                </CarouselItem>
                <CarouselItem>
                  <img src={ImgSix} alt="Image" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-[4rem] flex flex-col items-center">
            <h2 className="font-bold text-center uppercase">TOP RESTAURANTS</h2>
            <p className="text-center w-2/3 text-gray-400 text-[1.7rem] leading-[3rem] ">
              Things that get tricky are things like burgers and fries, or
              things that are deep-fried. We do have a couple of burger
              restaurants that are capable of doing a good job transporting but
              it's definitely a lot harder to do that. Fries are almost
              impossible
            </p>

            <Carousel
              className="mt-[4rem] w-full "
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem className=" md:basis-1/5">
                  <img src={ResOne} alt="Image" />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/5">
                  <img src={ResTwo} alt="Image" />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/5">
                  <img src={ResThree} alt="Image" />
                </CarouselItem>
                <CarouselItem className="  md:basis-1/5">
                  <img src={ResFour} alt="Image" />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/5">
                  <img src={ResFive} alt="Image" />
                </CarouselItem>
                <CarouselItem className=" md:basis-1/5">
                  <img src={ResSix} alt="Image" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
