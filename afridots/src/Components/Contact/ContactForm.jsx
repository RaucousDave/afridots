import FormPattern from "/assets/contact/form-bg.png";

export default function ContactForm() {
  const formInfo = [
    {
      id: 1,
      label: "Name",
      for: "name",
      type: "text",
      placeholder: "Full Name",
    },
    {
      id: 2,
      label: "Email",
      for: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: 3,
      label: "Subject",
      for: "subject",
      type: "text",
      placeholder: "Subject",
    },
  ];

  return (
    <div className="flex flex-col font-body gap-2 md:w-[40%] w-full md:p-6 text-lg border-[25px] [border-image:url(/assets/cardBorder.png)_30]">
      <div
        style={{ backgroundImage: `url(${FormPattern})` }}
        className=" bg-no-repeat bg-cover h-[100px] md:h-[160px] mb-12 rounded-xl"
      ></div>
      {formInfo.map((info) => (
        <div key={info.id} className="flex flex-col gap-1 mb-4">
          <label htmlFor={info.for} className="text-sm font-medium">
            {info.label}
          </label>
          <input
            id={info.for}
            type={info.type ?? "text"}
            placeholder={info.placeholder}
            className="border border-gray-200 rounded py-2 px-3 text-base focus:outline-none focus:border-gray-400"
          />
        </div>
      ))}

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          rows={5}
          className="border mb-8 border-gray-200 rounded px-3 py-2 text-base focus:outline-none focus:border-gray-400 resize-none"
        />
      </div>
      <button className="bg-yellow-500 text-white ml-auto px-12 py-3 rounded-full font-body">
        Send
      </button>
    </div>
  );
}
