import Img1 from "../assets/main_logo.png";
import Img2 from "../assets/morakcover.png";
import {
  commonProps,
  imgClassName,
  implementClasName,
  projectContainerClassName,
} from "../utils/props";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import ProjectName from "./project/ProjectName";
import ProjectDescription from "./project/ProjectDescription";

const Project = () => {
  return (
    <section className="section" id="project">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            {...commonProps(0.3)}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <h2 className="h2 leading-tight">Project</h2>
            <motion.div
              variants={fadeIn("left", 0.2)}
              {...commonProps(0.3)}
              className="flex gap-y-10">
              <img className={imgClassName} src={Img1} alt="swap" />
              <p className={projectContainerClassName}>
                <ProjectName name="SWAP" />
                <ProjectDescription description="굿즈 교환 플랫폼 프로젝트" />
                <span className={implementClasName}>구현 내용</span>
                <span className="font-bold">
                  <a
                    href="https://haseungdev.vercel.app/React/%EB%8B%89%EB%84%A4%EC%9E%84%20%EC%9E%90%EC%9D%8C,%EB%AA%A8%EC%9D%8C%20%EC%B2%98%EB%A6%AC%20%EB%B0%8F%20%EB%8B%89%EB%84%A4%EC%9E%84%20%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:opacity-70">
                    React-hook-form을 이용한 닉네임 유효성 검사
                  </a>
                </span>
                <li>
                  입력된 닉네임 값을 실시간으로 감지하여 오류가 있을 시
                  즉각적으로 오류메시지를 표시할 수 있도록 구현
                </li>
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              {...commonProps(0.3)}
              className="flex gap-y-10">
              <img className={imgClassName} src={Img2} alt="morakmorak" />
              <p className={projectContainerClassName}>
                <ProjectName name="Morak Morak" />
                <ProjectDescription description="개발 입문자들을 위한 따뜻한 개발자 커뮤니티" />
                <span className={implementClasName}>구현 내용</span>
                <li>
                  회원가입 페이지에서 닉네임이나 비밀번호 등의 입력값이 유효한지
                  실시간으로 검증하여 유효하지 않은 경우 오류 메시지를 즉시
                  표시하도록 구현
                </li>
                <li>
                  react-toastify 라이브러리를 활용하여 사용자들이 프로세스의
                  성공/실패 여부를 쉽게 파악할 수 있는 알림창 구현
                </li>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
