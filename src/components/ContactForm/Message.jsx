import React, { useState } from "react";
import formSchema from "./formSchema";
import Button from "../Button";
import person from "../../assets/media/Icon.png";
import email from "../../assets/media/Icon (1).png";
import phone from "../../assets/media/Outline.png";
import axios from "axios";
import SubmitingAlert from "./SubmitingAlert";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const formErrors = result.error.format();
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
      setIsSubmitting(true);

      try {
        const response = await axios.post(
          "https://backend.omarbendary.com/api/contact/",
          formData
        );

        setSuccessMessage("sent");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        setIsSubmitting(false);

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }
    }
  };

  return (
    <div className="w-full h-auto p-8 rounded-3xl border border-[#E5EFFF] shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.3)] px-3 md:px-8">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="">
          {/* TOP_PART */}
          <div className="flex justify-between gap-8 flex-col md:flex-row">
            {/* LEFT_SIDE */}
            <div className="flex-1">
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-base font-medium mb-2"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[52px] py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-base"
                  id="username"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name._errors[0]}
                  </p>
                )}
                <img
                  src={person}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 pt-6"
                  alt="Person Icon"
                />
              </div>
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-base font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[52px] py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-base"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email._errors[0]}
                  </p>
                )}
                <img
                  src={email}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 pt-4"
                  alt="Email Icon"
                />
              </div>
              <div className="mb-6 relative">
                <label
                  className="block text-gray-700 text-base font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[52px] py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-base"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone._errors[0]}
                  </p>
                )}
                <img
                  src={phone}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 pt-4"
                  alt="Phone Icon"
                />
              </div>
            </div>

            {/* RIGHT_SIDE */}
            <div className="flex-1">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-[16px] font-medium mb-2 leading-6"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[265px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  id="message"
                  placeholder="Your Message..."
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message._errors[0]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM_PART */}
          <div>
            {/* BUTTON */}
            <div className="w-full col-span-full flex flex-col justify-center items-center mt-4">
              <Button
                title={isSubmitting ? "Submitting..." : "Send Message"}
                type="submit"
                disabled={isSubmitting}
              />
              {successMessage && (
                <div className="mb-4 text-green-500 text-center font-medium mt-4">
                  <SubmitingAlert />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
