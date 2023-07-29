import Img1 from "../../assets/main_logo.png";
import Img2 from "../../assets/morakcover.png";
import Img3 from "../../assets/find-color.jpg";

import {
  imgClassName,
  implementClasName,
  projectContainerClassName,
} from "../../utils/props";

import ProjectNameAndPercent from "./ProjectNameAndPercent";
import ProjectDescription from "./ProjectDescription";

const Project = () => {
  return (
    <section className="flex justify-center text-gray-900" id="project">
      <div className="mx-auto">
        <div className="flex lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0 container">
            <h2 className="h2 leading-tight">Project</h2>
            <main>
              <div className="grid gap-6">
                <div className="flex gap-y-10 border-2 border-gray-500 p-4 rounded-lg">
                  <img className={imgClassName} src={Img1} alt="swap" />
                  <section className={projectContainerClassName}>
                    <ProjectNameAndPercent
                      link="https://swap-a69f8.firebaseapp.com/"
                      name="SWAP"
                      percent={30}
                    />
                    <ProjectDescription description="굿즈 교환 플랫폼 프로젝트" />
                    <div className="text-[15px] flex gap-y-2 mb-2 leading-6">
                      {[
                        "#React",
                        "#TypeScript",
                        "#Styled-components",
                        "#Recoil",
                        "#FireBase",
                      ].map((el, i) => (
                        <span key={i} className="px-[0.5rem]">
                          {el}
                        </span>
                      ))}
                    </div>
                    <span className={implementClasName}>구현 내용</span>
                    <h3 className="font-bold mb-2">
                      1. 마이페이지 컴포넌트 제작
                    </h3>
                    <section>
                      <ul className="space-y-3">
                        <li>
                          <a
                            href="https://haseungdev.vercel.app/React/%EB%8B%89%EB%84%A4%EC%9E%84%20%EC%9E%90%EC%9D%8C,%EB%AA%A8%EC%9D%8C%20%EC%B2%98%EB%A6%AC%20%EB%B0%8F%20%EB%8B%89%EB%84%A4%EC%9E%84%20%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:opacity-70 underline underline-offset-4">
                            <span className="font-bold">
                              닉네임 실시간 유효성 검증
                            </span>
                          </a>
                        </li>
                        <li>
                          입력된 닉네임 값을 실시간으로 감지하여 오류 발생 시
                          <br />
                          즉각적으로 오류메시지를 표시하도록 구현
                        </li>
                        <h3 className="font-bold">
                          2. 이미지 프리뷰, 업로드 및 삭제 구현
                        </h3>
                        <li>
                          <a
                            href="https://haseungdev.vercel.app/%EA%B8%80%EB%98%90/%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%9E%91%EC%97%85(%EC%9D%B4%EB%9D%BC%20%EC%93%B0%EA%B3%A0%20%EC%82%BD%EC%A7%88%EA%B8%B0..)/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:opacity-70 underline underline-offset-4 font-bold">
                            <strong className="text-blue-400">Firebase</strong>
                            를 이용하여 이미지 업로드와 삭제 구현
                          </a>
                        </li>
                      </ul>
                    </section>
                  </section>
                </div>
                <div className="flex gap-y-10 border-2 border-gray-500 p-4 rounded-lg">
                  <img className={imgClassName} src={Img2} alt="morakmorak" />
                  <article className={projectContainerClassName}>
                    <ProjectNameAndPercent
                      link="https://morakmorak.vercel.app/"
                      name="Morak Morak"
                      percent={20}
                    />
                    <ProjectDescription description="개발 입문자들을 위한 따뜻한 개발자 커뮤니티" />
                    <div className="text-[15px] flex gap-y-2 mb-2 leading-6">
                      {["#Next", "#TypeScript", "#TailwindCSS", "#Recoil"].map(
                        (el, i) => (
                          <span key={i} className="px-[0.5rem]">
                            {el}
                          </span>
                        )
                      )}
                    </div>
                    <h2 className={implementClasName}>구현 내용</h2>
                    <h3 className="font-bold">1. 로그인, 회원가입 폼 제작</h3>
                    <section>
                      <ul className="space-y-3">
                        <li>
                          로그인, 회원가입, 글 작성 완료 등의 프로세스를 알리는
                          <a
                            href="https://nextjs-blog-haseungdev.vercel.app/blog/noreferrer%EC%99%80%20noopener"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:opacity-70 underline underline-offset-4 font-bold">
                            알림창 구현
                          </a>
                          을 통한 UI/UX 개선
                        </li>
                        <li>
                          <strong className="text-blue-400">회원가입 폼</strong>
                          에서 닉네임, 이메일, 비밀번호에 대한 유효성 실시간
                          검증 및 오류 메시지를 즉시 표시하는 기능 구현
                        </li>
                        <h3 className="font-bold">2. 글 작성 기능 구현</h3>
                        <li>제목,내용,태그에 대한 validation 적용</li>
                        <li>태그에 대한 드롭다운 기능 구현</li>
                      </ul>
                    </section>
                  </article>
                </div>
                <div className="flex gap-y-10 border-2 border-gray-500 p-4 rounded-lg">
                  <img className={imgClassName} src={Img3} alt="find-color" />
                  <article className={projectContainerClassName}>
                    <ProjectNameAndPercent
                      link="https://find-different-color-beryl.vercel.app/"
                      name="다른 색깔 찾기 게임"
                      percent={100}
                    />
                    <ProjectDescription description="상태관리 라이브러리 없이 다른 색깔 찾기" />
                    <div className="flex gap-y-2 mb-2 leading-6">
                      <span className="px-[0.5rem]">#React</span>
                      <span className="px-[0.5rem]">#TypeScript</span>
                    </div>
                    <span className={implementClasName}>구현 내용</span>
                    <section>
                      <ul className="space-y-3">
                        <li>
                          정답 클릭 시 점수 누적 및 난이도 상승하도록 구현
                        </li>
                        <li>오답 클릭 시 남은 시간 3초씩 줄어들도록 구현</li>
                      </ul>
                    </section>
                  </article>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
