import Hero from "@/components/Hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ResOne from "../assets/res-1.png";
import ResTwo from "../assets/res-2.png";
import ResThree from "../assets/res-3.png";
import ResFour from "../assets/res-4.png";
import ResFive from "../assets/res-5.png";
import ResSix from "../assets/res-6.png";

import StepOne from "../assets/setp-img1.png";
import StepTwo from "../assets/setp-img2.png";
import StepThree from "../assets/setp-img3.png";

import Autoplay from "embla-carousel-autoplay";
import { useGetRestaurants } from "@/api/FoodRestaurantApi";
import RestaurantCard from "@/components/RestaurantCard";

import MobileImage from "../assets/app-mockup.png";
import PlayStore from "../assets/app-download-btn1.png";
import AppStore from "../assets/app-download-btn2.png";
import Loader from "@/components/Loader";

const HomePage = () => {
  const { restaurants, isLoading } = useGetRestaurants();

 

  return (
    <div>
      <Hero home={true} />

      <div className="contenedor   flex flex-col items-center">
        <p className="font-secundary text-red-600 text-[2.4rem] ">
          Website for Restaurant and Cafe
        </p>
        <h2 className="font-bold text-center uppercase">TOP RESTAURANTS</h2>
        <p className="text-center w-2/3 text-gray-400 text-[1.7rem] leading-[3rem] ">
          Things that get tricky are things like burgers and fries, or things
          that are deep-fried. We do have a couple of burger restaurants that
          are capable of doing a good job transporting but it's definitely a lot
          harder to do that. Fries are almost impossible
        </p>

        <Carousel
          className="mt-[4rem] w-full "
          opts={{
            loop: true,
            align: "center",
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

      <div className="hero-paralax my-[10rem] py-[52rem] md:py-[25rem] relative">
        <div className="absolute z-50 inset-0">
          <h3 className="text-white mt-[5rem] font-semibold text-center  ">
            Easy 3 Step Order
          </h3>

          <div className="contenedor my-[5rem] grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
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
              <p className="font-bold text-white text-[2rem] mb-0 text-center ">
                Explore Restaurants
              </p>
              <p className="text-[1.4rem] text-center leading-[3rem] text-white">
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
              <p className="font-bold text-white text-[2rem] mb-0 text-center ">
                Choose a Tasty Dish
              </p>
              <p className="text-[1.4rem] text-center leading-[3rem] text-white">
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
              <p className="font-bold text-white text-[2rem] mb-0 text-center ">
                Follow the Status
              </p>
              <p className="text-[1.4rem] text-center leading-[3rem] text-white">
                Stay updated with real-time tracking of your order or
                reservation status! From preparation to delivery or from booking
                to dining.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="font-secundary text-red-600 text-[2.4rem] text-center">
        Your Favourite Food{" "}
      </p>
      <h2 className="font-bold text-center uppercase">CHOOSE & ENJOY</h2>

      {isLoading ? <Loader /> : (<div className="contenedor grid md:grid-cols-3 gap-[2rem] my-[4rem] ">
        {restaurants?.slice(0, 6).map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>)}

      <div className=" md:mt-[15rem] bg-red-600 pt-[2rem]  ">
        <div className="contenedor grid md:grid-cols-[1fr,3fr] gap-[5rem] ">
          <div className="hidden md:block md:relative">
            <img className="absolute bottom-0" src={MobileImage} alt="Mobile" />
          </div>

          <div>
            <h3 className="text-white mt-[2rem] text-[2.5rem] font-bold">The Best Food Delivery App</h3>
            <p className="text-white md:w-2/3 text-[1.4rem] leading-[3rem] ">
              We have a launch team that focuses on one city at a time. At the
              end of the day, we're a marketplace. In order to make an effective
              marketplace, you need critical mass. We need enough restaurants
              that quality and variety
            </p>

            <div className="flex mb-[5rem] gap-[2rem] mt-[2rem] ">
              <img src={PlayStore} alt="PlayStore" />
              <img src={AppStore} alt="AppStore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
