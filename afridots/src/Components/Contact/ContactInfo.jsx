import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  const informationDetails = [
    {
      id: 1,
      name: "Phone Number",
      detail: "+234 8101234567",
      icon: Phone,
      fill: "fill-yellow-500",
    },
    { id: 2, name: "Email Address", detail: "info@afridtots.com", icon: Mail },
    { id: 3, name: "Our Location", detail: "Lagos, Nigeria", icon: MapPin },
  ];
  return (
    <div className="flex flex-col px-6 gap-4">
      {informationDetails.map((info) => {
        const Icon = info.icon;
        return (
          <div
            key={info.id}
            className=" flex flex-col gap-4 py-12 px-16 items-center text-[16px] justify-center border-[25px] [border-image:url(/assets/cardBorder.png)_30]"
          >
            <Icon
              className={`text-yellow-500 ${info.id === 1 && "fill-yellow-500"}`}
            />
            <p className="text-yellow-500 md:text-left text-center text-3xl font-cherry font-semibold">
              {info.name}
            </p>
            <p className="font-body text-center text-lg">{info.detail}</p>
          </div>
        );
      })}
    </div>
  );
}
