import Img1 from "../../assets/main_logo.png";

import { motion } from "framer-motion";

import ProjectNameAndPercent from "./ProjectNameAndPercent";
import ProjectDescription from "./ProjectDescription";
import { fadeIn } from "../../utils/variant";
import {
    commonProps,
    imgClassName,
    implementClasName,
    projectContainerClassName
} from "../../utils/props";

const Project = () => {
    return (
        <section className="flex justify-center text-gray-900" id="project">
            <div className="mx-auto">
                <div className="flex lg:flex-row gap-x-10">
                    <motion.div className="flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0 container">
                        <h2 className="h2 leading-tight">Project</h2>
                        <main>
                            <div className="grid gap-6">
                                <motion.div
                                    variants={fadeIn("left", 0.2)}
                                    {...commonProps(0.3)}
                                    className="flex gap-y-10 border-2 border-gray-500 p-4 rounded-lg"
                                >
                                    <img
                                        className={imgClassName}
                                        src={Img1}
                                        alt="swap"
                                    />
                                    <section
                                        className={projectContainerClassName}
                                    >
                                        <ProjectNameAndPercent
                                            link="https://swap-a69f8.firebaseapp.com/"
                                            name="SWAP"
                                            percent={30}
                                            period="2022.07~2023.04"
                                        />
                                        <ProjectDescription description="굿즈 교환 플랫폼 프로젝트" />
                                        <div className="text-[15px] flex gap-y-2 mb-2 leading-6">
                                            {[
                                                "#React",
                                                "#TypeScript",
                                                "#Styled-components",
                                                "#Recoil",
                                                "#FireBase"
                                            ].map((el, i) => (
                                                <span
                                                    key={i}
                                                    className="px-[0.5rem]"
                                                >
                                                    {el}
                                                </span>
                                            ))}
                                        </div>
                                        <span className={implementClasName}>
                                            구현 내용
                                        </span>
                                        <h3 className="font-bold mb-2">
                                            1. 마이페이지 컴포넌트 제작
                                        </h3>
                                        <section>
                                            <ul className="space-y-3">
                                                <li>
                                                    <a
                                                        href="https://nextjs-blog-haseungdev.vercel.app/blog/%EB%8B%89%EB%84%A4%EC%9E%84%20%EC%9E%90%EC%9D%8C,%EB%AA%A8%EC%9D%8C%20%EC%B2%98%EB%A6%AC%20%EB%B0%8F%20%EB%8B%89%EB%84%A4%EC%9E%84%20%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0"
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                        className="hover:opacity-70 underline underline-offset-4"
                                                    >
                                                        <span className="font-bold">
                                                            닉네임 실시간 유효성
                                                            검증
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    입력된 닉네임 값을
                                                    실시간으로 감지하여 오류
                                                    발생 시
                                                    <br />
                                                    즉각적으로 오류메시지를
                                                    표시하도록 구현
                                                </li>
                                                <h3 className="font-bold">
                                                    2. 이미지 프리뷰, 업로드 및
                                                    삭제 구현
                                                </h3>
                                                <li>
                                                    <a
                                                        href="https://nextjs-blog-haseungdev.vercel.app/blog/%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%9E%91%EC%97%85(..%EC%9D%B4%EB%9D%BC%EA%B3%A0%20%EC%93%B0%EA%B3%A0%20%EC%82%BD%EC%A7%88%EA%B8%B0)"
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                        className="hover:opacity-70 underline underline-offset-4 font-bold"
                                                    >
                                                        <strong className="text-blue-400">
                                                            Firebase
                                                        </strong>
                                                        를 이용하여 이미지
                                                        업로드와 삭제 구현
                                                    </a>
                                                </li>
                                            </ul>
                                        </section>
                                    </section>
                                </motion.div>
                            </div>
                        </main>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Project;
