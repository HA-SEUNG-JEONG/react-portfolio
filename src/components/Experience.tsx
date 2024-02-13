import { motion } from "framer-motion";
import { fadeIn } from "../utils/variant";
import { commonProps } from "../utils/props";
import ProjectDescription from "./project/ProjectDescription";
import ProjectNameAndPercent from "./project/ProjectNameAndPercent";

const Experience = () => {
    return (
        <div
            id="experience"
            className="flex flex-col items-center justify-center text-gray-900"
        >
            <h2 className="h2 leading-tight mb-2">Experience</h2>
            <main>
                <div className="grid gap-6">
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        {...commonProps(0.3)}
                        className="flex gap-y-10 gap-x-52 rounded-lg"
                    >
                        <div className=" ">
                            <ProjectNameAndPercent
                                name="애자일그로스"
                                period="2023.08~2024.01"
                            />
                        </div>
                        <section className="max-w-lg mb-16 ml-2 leading-[1.8] flex flex-col">
                            <ProjectDescription description="로스리스컷" />
                            <div className="text-[15px] flex mb-2 leading-6">
                                {["#React", "#Styled-components", "#Jotai"].map(
                                    (el, i) => (
                                        <span key={i}>{el}</span>
                                    )
                                )}
                            </div>

                            <h3 className="font-bold mb-2">
                                1. 코드 가독성 향상
                            </h3>
                            <section>
                                <ul className="space-y-3">
                                    <li>
                                        가독성이 떨어지던 인라인 스타일이
                                        적용되어 있던 부분을 개선하기 위해
                                        컴포넌트 단위의 네이밍을 적용해서 가독성
                                        향상하였습니다.
                                    </li>
                                    <h3 className="font-bold mb-2">
                                        2. UX 개선
                                    </h3>
                                    <li>
                                        api를 처리하는 과정에서 toast 컴포넌트를
                                        활용하여 사용자 경험을 개선하였습니다.
                                    </li>
                                    <h3 className="font-bold">
                                        3. 상태 관리 툴 마이그레이션
                                    </h3>
                                    <div>
                                        <a
                                            href="https://morethan-haseung-log.vercel.app/video"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="hover:opacity-70 underdivne text-blue-400 underline-offset-4 font-bold"
                                        >
                                            video 배율 보여주기
                                        </a>
                                        <li>
                                            video 객체에 존재하는 속성을
                                            이용하여 비디오의 배율 렌더링하면서
                                            얻은 경험에 대해 기록했습니다.
                                        </li>
                                    </div>
                                    <div>
                                        <a
                                            href="https://morethan-haseung-log.vercel.app/recoil-to-jotai"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="hover:opacity-70 underline text-blue-400 underline-offset-4 font-bold"
                                        >
                                            Recoil에서 Jotai로
                                        </a>
                                        <li>
                                            Recoil을 사용하면서 겪었던 이슈를
                                            Jotai로 바꾸면서 얻은 경험에 대해
                                            기록했습니다.
                                        </li>
                                        <li>
                                            공식문서를 통해 Zustand, Jotai,
                                            Recoil을 비교하면서 Jotai를
                                            적용했습니다.
                                        </li>
                                    </div>
                                </ul>
                            </section>
                        </section>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Experience;
