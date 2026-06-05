import React from "react";
const Fb = "/assets/fbIcon.png";
const Ig = "/assets/igIcon.png";
const LiIn = "/assets/liIcon.png";
import { teamMembers } from "../data/team";

const socialLinks = [
  { href: "https://www.facebook.com", src: Fb, alt: "Facebook" },
  { href: "https://www.linkedin.com", src: LiIn, alt: "LinkedIn" },
  { href: "https://www.instagram.com", src: Ig, alt: "Instagram" },
];

const SocialIcon = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full h-fit w-fit hover:bg-blue-500 transition-colors ease-in"
  >
    <img src={src} alt={alt} />
  </a>
);

const TeamCard = ({ name, role, image }) => (
  <div className="border-20 text-center pb-4 [border-image:url('/assets/Frame2.png')_30]">
    <div className="h-[40%] w-fit mx-auto rounded overflow-hidden">
      <img src={image} alt={name} />
    </div>

    <h2 className="text-[40px] text-center font-cherry text-[#09230F]">
      {name}
    </h2>

    <h3 className="text-[#5E9F43] font-body text-center py-2 text-2xl">
      {role}
    </h3>

    <div className="flex justify-center gap-4">
      {socialLinks.map((link) => (
        <SocialIcon key={link.alt} {...link} />
      ))}
    </div>

    <p className="text-center font-body mb-4 pt-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
      necessitatibus accusamus maiores optio. Neque, provident ab deserunt quod
      minus delectus suscipit voluptate eius.
    </p>
  </div>
);

const TeamGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {teamMembers.map((member) => (
      <TeamCard key={member.id} {...member} />
    ))}
  </div>
);

export default TeamGrid;
