import ActiveLifeCollection from "../components/active-life/ActiveLifeCollection";
import Hero from "../components/hero/Hero";
import HomeEssentials from "../components/home-essentials/HomeEssentials";
import Newsletter from "../components/shared/Newsletter";
import Testimonials from "../components/shared/testimonials/Testimonials";
import TopCategory from "../components/top-category/TopCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <TopCategory />
      <ActiveLifeCollection />
      <HomeEssentials />
      <Testimonials />
      <Newsletter />
    </>
  );
}
