import React from "react";
const AbtHero = "/assets/aboutHero1.png";
const Star = "/assets/Star.png";
const Star2 = "/assets/Star2.png";
const Star3 = "/assets/Star3.png";
const Sema = "/assets/semaAbout.png";
const WWDIBg = "/assets/Whywedoit.png";
const WWDIBg1 = "/assets/Whywedoit2.png";
const WWDILeft = "/assets/wwdiAnime.png";
const Ceo = "/assets/ceo.png";
import WWDCard from "../Components/WWDCard";
import TeamCard from "../Components/TeamCard";

const About = () => {
  const cardData = [
    {
      number: 1,
      title: "Book Sales",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cumque.",
      buttonText: "Buy a Book",
    },
    {
      number: 2,
      title: "Audio Stories",
      description:
        "Porro architecto atque magnam perferendis totam nostrum eos fugiat minima.",
      buttonText: "Listen to Audio",
    },
    {
      number: 3,
      title: "Partnership",
      description:
        "Attend our events to learn more and connect with like-minded people.",
      buttonText: "Partner With Us",
    },
  ];

  const TeamData = [
    {
      img: Ceo,
      name: "Gabriel Adams",
      position: "CEO",
      fb: "https//:www.fb.com",
      lkin: "https//:www.linkedin.com",
      ig: "http://www.instagram.com",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt a ipsam molestias voluptate, neque ut ducimus earum porro excepturi autem quibusdam consectetur sequi.",
    },
    {
      img: Ceo,
      name: "Gabriel Adams",
      position: "CEO",
      fb: "https//:www.fb.com",
      lkin: "https//:www.linkedin.com",
      ig: "http://www.instagram.com",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt a ipsam molestias voluptate, neque ut ducimus earum porro excepturi autem quibusdam consectetur sequi.",
    },
    {
      img: Ceo,
      name: "Gabriel Adams",
      position: "CEO",
      fb: "https//:www.fb.com",
      lkin: "https//:www.linkedin.com",
      ig: "http://www.instagram.com",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt a ipsam molestias voluptate, neque ut ducimus earum porro excepturi autem quibusdam consectetur sequi.",
    },
    {
      img: Ceo,
      name: "Gabriel Adams",
      position: "CEO",
      fb: "https//:www.fb.com",
      lkin: "https//:www.linkedin.com",
      ig: "http://www.instagram.com",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt a ipsam molestias voluptate, neque ut ducimus earum porro excepturi autem quibusdam consectetur sequi.",
    },
    {
      img: Ceo,
      name: "Gabriel Adams",
      position: "CEO",
      fb: "https//:www.fb.com",
      lkin: "https//:www.linkedin.com",
      ig: "http://www.instagram.com",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt a ipsam molestias voluptate, neque ut ducimus earum porro excepturi autem quibusdam consectetur sequi.",
    },
    {
      img: Ceo,
      name: "Gabriel Adams",
      position: "CEO",
      fb: "https//:www.fb.com",
      lkin: "https//:www.linkedin.com",
      ig: "http://www.instagram.com",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt a ipsam molestias voluptate, neque ut ducimus earum porro excepturi autem quibusdam consectetur sequi.",
    },
  ];
  return (
    <div>
      <section className="px-4 flex flex-col items-center mt-34">
        <div className=" w-fit relative">
          <img
            src={Star}
            className="absolute -top-[72px] -left-16 w-10 md:w-20 "
            alt="star icon"
          />

          <h2 className="font-cherry text-4xl md:text-7xl sm:text-6xl text-[#5E9F43] text-center ">
            Let's <br className="md:hidden" /> tell you our
          </h2>
        </div>
        <img src={AbtHero} className="  " alt="" />
      </section>

      {/* who we are */}
      <section className="px-4 sm:px-10 md:px-20 md:flex py-8 md:pt-0">
        <div className="flex-5">
          <img src={Star} alt="Star icon" className="mb-3" />
          <h2 className="font-cherry text-5xl  md:text-6xl ">Who We Are </h2>
          <p className="pt-4 font-body max-w-xl leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio
            nisi expedita mollitia atque iste eaque molestias repudiandae
            numquam quis doloribus sapiente error minima animi voluptates,
            consequuntur vero sit. Perspiciatis, dolorum! Mollitia ab,
            consectetur fugit obcaecati id in minima voluptatem?
          </p>
        </div>
        <div className="flex-4 relative">
          <img
            src={Sema}
            className="md:absolute -top-8/12"
            alt="sema character"
          />
        </div>
      </section>

      {/* What we do */}

      <section className="px-4 sm:px-10 md:px-20 md:mt-30 py-15 bg-[#F8F8F8]">
        <div className="">
          <img
            src={Star2}
            className="mb-3 w-10 sm:w-15 md:w-20 "
            alt="star icon"
          />
          <h2 className="font-cherry text-5xl  md:text-6xl text-[#E3A107] ">
            What We Do{" "}
          </h2>
          <p className="pt-4 font-body leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio
            nisi expedita mollitia atque iste eaque molestias repudiandae
            numquam quis doloribus sapiente error minima animi voluptates,
            consequuntur vero sit. Perspiciatis, dolorum! Mollitia ab,
            consectetur fugit obcaecati id in minima voluptatem?
          </p>
        </div>
        <div className="flex flex-wrap font-body justify-center gap-5 py-8 ">
          {cardData.map((item, index) => (
            <WWDCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Why we do it */}

      <section className=" flex font-body flex-col md:flex-row relative h-contain px-4 sm:px-10 md:px-20 gap-5 py-26 ">
        <img
          src={WWDIBg}
          className="absolute top-0 left-0 w-[1500px] hidden md:flex lg:w-full -z-1 h-full "
          alt=""
        />
        <img
          src={WWDIBg1}
          className="absolute top-0 left-0 w-[1500px] lg:w-full -z-1 h-full md:hidden flex "
          alt=""
        />

        <div className="flex flex-3 justify-center items-center relative">
          <img
            src={Star3}
            className="absolute top-0 left-0 w-12 md:w-20 "
            alt=""
          />

          <img
            src={WWDILeft}
            className=" h-[328px] md:h-[446px] w-auto"
            alt="star icon"
          />
        </div>
        <div className="flex-4 flex flex-col justify-between">
          <img src={Star} className="w-10 sm:w-15 md:w-20 " alt="star icon" />
          <h1 className="font-cherry my-5 text-4xl sm:text-5xl  lg:text-6xl">
            Why We Do It
          </h1>
          <p className="lg:leading-10 leading-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam
            ea autem fugiat alias ipsum similique maxime sint, excepturi totam
            debitis atque, a ullam delectus veritatis ut. Beatae, quas eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dignissimos consectetur blanditiis magni sed veritatis laudantium,
            recusandae excepturi dolor numquam magnam quasi. Impedit amet
            quisquam voluptatem soluta ratione ab eos dolorum nulla, aut
            doloremque itaque labore nostrum possimus omnis eum fuga excepturi
            laborum aliquid? Ullam.
          </p>
        </div>
      </section>

      <section className="my-9 px-4 sm:px-10 md:px-20">
        <div className=" flex justify-center">
          <img src={Star2} className="w-10 sm:w-15 md:w-20 " alt="star icon" />
        </div>
        <h2 className="font-cherry my-5 text-4xl sm:text-5xl  lg:text-6xl text-[#E3A107] text-center">
          Our Team
        </h2>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          deleniti temporibus optio laudantium iure. Dignissimos delectus
          voluptatem harum consequuntur pariatur, a iure dicta esse quidem
          voluptas cum, incidunt adipisci nesciunt!
        </p>

        
          {/* <div className='flex' > */}
          <TeamCard />
        
      </section>
    </div>
  );
};

export default About;
