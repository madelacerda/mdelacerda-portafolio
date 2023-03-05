import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_yjeu8rb",
        "template_24mejlf",
        {
          from_name: form.name,
          to_name: "Matias",
          from_email: form.email,
          to_email: "matiasdlc95.mdlc@gmail.com",
          message: form.message,
        },
        "ZcA7_R-UdsX8c-QlT"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias! te contactare lo mas pronto posible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Algo ha ocurrido");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>¿Quieres saber mas?</p>
        <h3 className={styles.sectionHeadText}>Contactame.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Tu Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Cual es tu nombre"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Tu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Cual es tu email"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Tu Mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="Que te gustaria decirme?"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
