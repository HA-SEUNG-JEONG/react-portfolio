import Introduction from "./Introduction";
import SocialLink from "./SocialLink";
import Profile from "./Profile";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home">
      <div className="container mx-auto mt-20">
        <article className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <Introduction />
            <SocialLink />
          </div>
          <Profile />
        </article>
      </div>
    </section>
  );
};

export default Banner;
