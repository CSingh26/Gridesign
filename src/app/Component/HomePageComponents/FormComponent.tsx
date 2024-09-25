import React, { useState } from "react"
import emailjs from "emailjs-com"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSent, setIsSent] = useState(false) // To handle success message
  const [isError, setIsError] = useState(false) // To handle error message

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    // Replace these with your EmailJS details
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS environment variables.")
      return
    }

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setIsSent(true) // Show success message
          setIsError(false) // Reset error state
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          })
          setTimeout(() => {
            setIsSent(false)
          }, 5000)
        },
        (error) => {
          console.log("FAILED...", error)
          setIsError(true) // Show error message
          setIsSent(false) // Reset success state
        }
      )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-4xl font-bold heading">Let&apos;s Talk</h3>
      <p className="sub-heading">Let your querry flow in.</p>

      {isSent && <p className="text-green-500">Message sent successfully!</p>}
      {isError && <p className="text-red-500">Failed to send message.</p>}

      <input
        className="w-full p-2 border rounded sub-heading"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 border rounded sub-heading"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full p-2 border rounded sub-heading"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-[#00a669] text-white p-2 rounded w-full hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm