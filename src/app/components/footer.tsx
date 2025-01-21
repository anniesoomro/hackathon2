"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const help = [
    { title: "Payment Options", link: "/payment-options" },
    { title: "Returns", link: "/returns" },
    { title: "Privacy Policies", link: "/privacy-policy" },
  ];

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = e.currentTarget.querySelector("input") as HTMLInputElement;
    const email = emailInput.value.trim();

    if (email) {
      toast.success("Thank you for subscribing!");
      emailInput.value = ""; // Clear the input field
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <section className="pb-16 bg-gray-50">
      <ToastContainer />
      <div className="px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-8 pt-16">
        {/* Logo and Address */}
        <div>
          <Image
            src="/Funiro.png"
            alt="Footer logo"
            width={200}
            height={50}
            className="mb-4"
          />
          <address className="text-gray-600 mt-8">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <p className="text-gray-600 font-bold mb-6">Links</p>
          <div className="flex flex-col gap-4 font-medium">
            {links.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-gray-400">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Help */}
        <div>
          <p className="text-gray-600 font-bold mb-6">Help</p>
          <div className="flex flex-col gap-4 font-medium">
            {help.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-gray-400">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-gray-600 font-bold mb-6">Newsletter</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md border border-gray-300 w-full sm:w-[250px]"
              required
            />
            <button
              type="submit"
              className="font-medium underline underline-offset-[6px] px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4 md:px-[70px]">
        <p className="text-gray-600 mt-8 py-8 border-t border-gray-200">
          &copy; 2023 Furino. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;