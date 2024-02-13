import ContactIcon from "../icons/ContactIcon";
import HomeIcon from "../icons/HomeIcon";
import SkillIcon from "../icons/SkillIcon";
import ProjectIcon from "../icons/ProjectIcon";
import ExperienceIcon from "../icons/ExperienceIcon";

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <section className="container mx-auto">
                <article className="w-full bg-black/40 h-[96px] background-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
                    <HomeIcon />
                    <ExperienceIcon />
                    <SkillIcon />
                    <ProjectIcon />
                    <ContactIcon />
                </article>
            </section>
        </nav>
    );
};

export default Nav;
