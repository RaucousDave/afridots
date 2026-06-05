import { useState } from "react";
import Star from "/assets/Star2.png";

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Why Afridots",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptatibus ipsum sequi ut in sed perspiciatis necessitatibus nesciunt sint! Consequatur qui atque magni praesentium quidem tempore, deserunt similique cumque. Nihil",
    },
    {
      id: 2,
      question: "How Do I pay for my order?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptatibus ipsum sequi ut in sed perspiciatis necessitatibus nesciunt sint! Consequatur qui atque magni praesentium quidem tempore, deserunt similique cumque. Nihil!",
    },
    {
      id: 3,
      question: "Are the audio books available for download?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptatibus ipsum sequi ut in sed perspiciatis necessitatibus nesciunt sint! Consequatur qui atque magni praesentium quidem tempore, deserunt similique cumque. Nihil!",
    },
  ];

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-[#F8F8F8] py-24 px-6 md:px-12">
      <div className="flex flex-col gap-3">
        <img src={Star} className="w-12 h-12" alt="" />
        <h1 className="font-cherry font-semibold text-6xl text-yellow-500 tracking-wider">
          FAQs
        </h1>
        <p className="font-body text-lg mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, optio
          commodi. Quas recusandae praesentium tempora earum consectetur quos
          laudantium inventore. Facere sed quae incidunt officiis minima non
          optio error fugit?
        </p>
      </div>

      <div className="mt-12 flex gap-4 flex-col">
        {faqs.map((faq) => (
          <div key={faq.id} className=" flex flex-col text-[16px] justify-center border-[25px] [border-image:url(/assets/cardBorder.png)_30]">
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex justify-between text-left font-body text-lg"
            >
              <span className="text-yellow-500 font-semibold">
                {faq.question}
              </span>
              <span>{openId === faq.id ? "−" : "+"}</span>
            </button>
            {openId === faq.id && (
              <p className="font-body pb-5 mt-6 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
