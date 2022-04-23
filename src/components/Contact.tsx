const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex jusify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8c3d71b8-e00b-4bf1-9d91-800f8a66d7ea"
        className="flex flex-col max-w-[37.5rem] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">메일 보내기</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="이름"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="이메일"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="메시지"
        ></textarea>
        <button className="text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 px-4 py-3 my-8 mx-auto flex items-center">
          전송
        </button>
      </form>
    </div>
  );
};

export default Contact;
