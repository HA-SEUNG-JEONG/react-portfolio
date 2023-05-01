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
            className="flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0">
            <h2 className="h2 leading-tight">Project</h2>
            <motion.div
              variants={fadeIn("left", 0.2)}
              {...commonProps(0.3)}
              className="flex gap-y-10 border-2 border-gray-500 p-4 rounded-lg">
              <img className={imgClassName} src={Img1} alt="swap" />
              <p className={projectContainerClassName}>
                <ProjectName name="SWAP" />
                <ProjectDescription description="굿즈 교환 플랫폼 프로젝트" />
                <span className={implementClasName}>구현 내용</span>
                <h3 className="font-bold">1. 마이페이지 컴포넌트 제작</h3>
                <section>
                  <ul className="space-y-3">
                    <li className="leading-tight">
                      <a
                        href="https://haseungdev.vercel.app/React/%EB%8B%89%EB%84%A4%EC%9E%84%20%EC%9E%90%EC%9D%8C,%EB%AA%A8%EC%9D%8C%20%EC%B2%98%EB%A6%AC%20%EB%B0%8F%20%EB%8B%89%EB%84%A4%EC%9E%84%20%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:opacity-70 underline">
                        <strong className="text-blue-400">
                          react-hook-form
                        </strong>
                        을 이용하여 닉네임 실시간 검증
                      </a>
                    </li>
                    <li>
                      입력된 닉네임 값을 실시간으로 감지하여 오류 발생 시
                      즉각적으로 오류메시지를 표시하도록 구현
                    </li>
                    <h3 className="font-bold">
                      2. 이미지 프리뷰, 업로드 및 삭제 구현
                    </h3>
                    <li className="leading-tight">
                      <a
                        href="https://haseungdev.vercel.app/%EA%B8%80%EB%98%90/%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%9E%91%EC%97%85(%EC%9D%B4%EB%9D%BC%20%EC%93%B0%EA%B3%A0%20%EC%82%BD%EC%A7%88%EA%B8%B0..)/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:opacity-70 underline">
                        <strong className="text-blue-400">Firebase </strong>를
                        이용하여 이미지 업로드와 삭제 구현
                      </a>
                    </li>
                  </ul>
                </section>
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              {...commonProps(0.3)}
              className="flex gap-y-10 border-2 border-gray-500 p-4 rounded-lg">
              <img className={imgClassName} src={Img2} alt="morakmorak" />
              <article className={projectContainerClassName}>
                <ProjectName name="Morak Morak" />
                <ProjectDescription description="개발 입문자들을 위한 따뜻한 개발자 커뮤니티" />
                <h2 className={implementClasName}>구현 내용</h2>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-blue-400">react-toastify</strong>{" "}
                    라이브러리를 사용하여 로그인, 회원가입, 글 작성 완료 등의
                    프로세스를 알리는 알림창 구현
                  </li>
                  <li>
                    <strong className="text-blue-400">react-hook-form</strong>을
                    이용하여 회원가입 페이지에서 닉네임,이메일,비밀번호에 대한
                    유효성 실시간 검증 및 오류 메시지를 즉시 표시하는 기능 구현
                  </li>
                  <li>
                    회원가입 페이지에서 사용자가 입력한 새로운 비밀번호를
                    확인하기 위해, 클라이언트 측에서 비밀번호 재확인 기능 구현
                  </li>
                </ul>
              </article>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
