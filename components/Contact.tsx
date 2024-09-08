"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaMailBulk } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement &
      HTMLTextAreaElement;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-20 relative" id="contact">
      <h2 className="mb-5 text-center text-[40px] md:text-5xl lg:text-6xl text-blue-900">
        Contact
      </h2>

      <div className="relative">
        {/* Spotlights traversant toute la largeur de la section */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="yellow"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-black/10 p-6 rounded-lg shadow-lg border border-gray-300"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
              Protection des données* <br />
              En soumettant ce formulaire, j'accepte que les informations
              saisies soient transmises par mail à InSitu Systems dans le but
              d'être recontacté concernant ma demande.
            </label>
          </div>

          {/* Remplacement du bouton par MagicButton */}
          <div className="flex justify-center mt-3">
            <a href="#contact">
              <MagicButton
                title="Envoyer"
                icon={<FaMailBulk />}
                position="right"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
