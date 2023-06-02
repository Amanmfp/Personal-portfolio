import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a recent graduate in computer science with a strong focus on
          front-end development, I am eager to apply my skills and knowledge to
          a career in this exciting and dynamic field. With a solid foundation
          in HTML, CSS, and JavaScript, as well as experience working with
          modern front-end frameworks like React.js, I am confident in my
          ability to develop high-quality, user-friendly interfaces that meet
          the needs of both clients and end-users.
        </p>

        <br />

        <p className="text-xl">
          If you are looking for a dedicated and enthusiastic front-end
          developer to join your team, please don't hesitate to get in touch. I
          am excited about the opportunity to contribute my skills and knowledge
          to a dynamic and growing company in this field.
        </p>
      </div>
    </div>
  );
};

export default About;
