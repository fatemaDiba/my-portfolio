import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gl61buo", "template_9htym4s", form.current, {
        publicKey: "23eiqjRap3Ch39u3M",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-slate-200 py-10 text-white/90">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto mb-20 px-10 md:px-0">
        <h2 className="text-black text-center text-2xl md:text-4xl font-semibold mb-14">
          Contact With Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="w-full md:w-11/12 py-10 px-10 bg-[#3c6e71] rounded-xl border-t-4 rounded-t-2xl border-[#003049] cursor-pointer shadow-2xl place-self-center mb-5 md:mb-0">
            <img src="/assets/contact.png" alt="" className="w-14" />
            <div className="border border-white/70 mb-4 mt-4"></div>
            <div className="space-y-2">
              <a
                href="mailto:fatematabassum00700@gmail.com"
                target="_blank"
                className="text-sm md:text-base flex items-center"
              >
                <MdEmail className="text-xl mr-2" />:
                fatematabassum00700@gmail.com
              </a>
              <a
                href="tel:+88018868563976"
                target="_blank"
                className="text-sm md:text-base flex items-center"
              >
                <MdAddCall className="text-xl mr-2" />: +88018868563976
              </a>
              <a
                href="https://wa.me/018868563976"
                target="_blank"
                className="text-sm md:text-base flex items-center"
              >
                <FaWhatsapp className="text-xl mr-2" />: 018868563976
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-full text-black shadow-2xl">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <h2 className="text-black/80 text-center text-xl md:text-2xl font-semibold">
                Direct Mail Me
              </h2>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="full name"
                  className="input input-bordered text-sm md:text-base"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <p className="text-black/80 text-sm mb-2">Message</p>
                <textarea
                  name="message"
                  placeholder="message"
                  className="text-sm md:text-base textarea textarea-bordered textarea-lg w-full "
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-black/80 bg-[#3f9094] hover:bg-[#064789]">
                  Send <IoIosSend className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
