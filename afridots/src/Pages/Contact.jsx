import ContactHero from "/assets/contact/Contact-Hero.png";
import ContactInfo from "../Components/Contact/ContactInfo";
import ContactMobileHero from "/assets/contact/mobile-contact-hero.png";
import ContactForm from "../Components/Contact/ContactForm";
import Faq from "../Components/Contact/Faq";
import Star from "/assets/Star.png";

export default function Contact() {
  return (
    <main className="mt-12 overflow-x-hidden">
      <section className="w-full h-[100dvh]">
        <div className="md:p-16 p-6 pt-12 relative">
          <img
            src={Star}
            alt=""
            className="absolute md:top-6 left-0 md:left-1/8"
          />
          <img src={ContactHero} className="mx-auto hidden md:block" alt="" />
          <img src={ContactMobileHero} className="mx-auto md:hidden" alt="" />
          <img
            src={Star}
            alt=""
            className="absolute md:bottom-6 md:right-1/4 right-6"
          />
        </div>
      </section>
      <section className="flex gap-12 py-6 px-6 items-center md:items-start md:flex-row flex-col justify-center">
        <ContactInfo />
        <ContactForm />
      </section>
      <Faq />
    </main>
  );
}
