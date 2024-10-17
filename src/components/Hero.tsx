import LinkShortenForm from "./LinkShortenForm";
import PromotionalCard from "./PromotionalCard";
import ShowShortenedLinks from "./ShowShortenedLinks";
import BrandRecognitionCardIcon from "../assets/icons/icon-brand-recognition.svg";
import DetailedRecordsCardIcon from "../assets/icons/icon-detailed-records.svg";
import FullyCustomizableCardIcon from "../assets/icons/icon-fully-customizable.svg";
const Hero = () => {
  return (
    <section className="bg-neutral-lightGray flex flex-col gap-8 items-center p-8">
      <div className="mb-16">
        <LinkShortenForm />
        <ShowShortenedLinks />
      </div>
      <h2 className="font-poppins font-bold text-3xl text-primary-darkViolet">
        Advanced Statistics
      </h2>
      <p className="font-poppins  text-neutral-grayishViolet md:text-left text-center">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="relative  mt-12 mb-28">
        <div className="bg-primary-cyan lg:h-2 lg:w-full h-full w-2 absolute lg:top-1/2 left-1/2 transform -translate-x-1/2"></div>
        <div className="flex md:gap-8 gap-20 flex-col lg:flex-row justify-center">
          <PromotionalCard
            iconUrl={BrandRecognitionCardIcon}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
            className="relative"
          />
          <PromotionalCard
            iconUrl={DetailedRecordsCardIcon}
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
            className="relative md:top-10"
          />
          <PromotionalCard
            iconUrl={FullyCustomizableCardIcon}
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
            className="relative md:top-20"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
