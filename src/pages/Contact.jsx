import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState(""); // success / error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE", "YOUR_TEMPLATE", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setStatus("success");
          form.current.reset();

          setTimeout(() => setStatus(""), 2500);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 2500);
        }
      );
  };

  return (
    <div className="w-full py-20 px-4 bg-black text-white relative" id="contact">

      {/* 🔥 TOAST */}
      {status && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-lg text-sm font-medium
        backdrop-blur-md border transition-all duration-500
        ${status === "success"
            ? "bg-green-500/10 border-green-400 text-green-300"
            : "bg-red-500/10 border-red-400 text-red-300"
          }`}>
          {status === "success" ? "Message sent successfully 🚀" : "Failed to send ❌"}
        </div>
      )}

      {/* TITLE */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">

        {/* LEFT */}
        <div className="flex flex-col justify-between space-y-8">

          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Let’s{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h3>

            <p className="text-gray-400 max-w-md">
              Have a project or idea? I’m always open to meaningful conversations.
            </p>
          </div>

          <div className="space-y-4">

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
              <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition">
                <Mail />
              </div>
              <div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="font-semibold break-all">balakrishnanabarath06@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition">
              <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400 group-hover:scale-110 transition">
                <Phone />
              </div>
              <div>
                <p className="text-xs text-gray-400">PHONE</p>
                <p className="font-semibold">+91 7010339757</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition">
              <div className="p-3 rounded-lg bg-indigo-400/10 text-indigo-400 group-hover:scale-110 transition">
                <MapPin />
              </div>
              <div>
                <p className="text-xs text-gray-400">LOCATION</p>
                <p className="font-semibold">Surapet-Chennai,India</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-[1px] rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500"
        >
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 space-y-6">

            <div className="grid sm:grid-cols-2 gap-4">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white
                focus:border-cyan-400 outline-none transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white
                focus:border-cyan-400 outline-none transition autofill-fix"
              />

            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white
              focus:border-cyan-400 outline-none resize-none transition"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2
              bg-gradient-to-r from-cyan-400 to-blue-500 
              hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Send Message <Send size={18} />
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}