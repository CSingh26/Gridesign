"use client";

const ContactForm = () => {
  return (
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="sub-heading p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00a669]"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="sub-heading p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00a669]"
        required
      />
      <textarea
        placeholder="Message"
        className="sub-heading p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00a669]"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="heading p-3 bg-[#00a669] text-white rounded-md hover:bg-[#008b54] transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;