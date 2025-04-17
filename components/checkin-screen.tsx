"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, ArrowLeft } from "lucide-react"

interface CheckinScreenProps {
  phoneNumber: string
  setPhoneNumber: (value: string) => void
  onCheckin: () => void
}

export default function CheckinScreen({ phoneNumber, setPhoneNumber, onCheckin }: CheckinScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAgreed, setIsAgreed] = useState(true) // Pre-checked for better UX

  const handleNumberClick = (num: string) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + num)
    }
  }

  const handleClear = () => {
    setPhoneNumber("")
  }

  const handleBackspace = () => {
    setPhoneNumber(phoneNumber.slice(0, -1))
  }

  const handleCheckin = () => {
    // Only proceed if phone number is valid
    if (phoneNumber.length >= 10) {
      console.log("Checking in with phone number:", phoneNumber)
      onCheckin()
    } else {
      // Visual feedback that more digits are needed
      const phoneInput = document.querySelector(".phone-input")
      if (phoneInput) {
        phoneInput.classList.add("shake-animation")
        setTimeout(() => {
          phoneInput.classList.remove("shake-animation")
        }, 500)
      }
    }
  }

  const formatPhoneNumber = (phone: string) => {
    if (phone.length === 0) return ""
    if (phone.length <= 3) return phone
    if (phone.length <= 6) return `${phone.slice(0, 3)}-${phone.slice(3)}`
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const slides = [
    { title: "10% OFF", subtitle: "WHEN YOU REDEEM", highlight: "10 REWARD POINTS" },
    { title: "FREE NAIL ART", subtitle: "WITH PURCHASE OF", highlight: "FULL SET" },
    { title: "REFER A FRIEND", subtitle: "AND EARN", highlight: "5 BONUS POINTS" },
  ]

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Left Side - Promotional Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col" style={{ backgroundColor: "#f05122" }}>
        <div className="mb-4">
          <div className="text-white text-sm">Welcome to</div>
          <h2 className="text-white text-3xl font-bold">PERDIGI CHECKIN</h2>
          <p className="text-white text-sm">(800) 652-8234</p>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 text-white opacity-70 hover:opacity-100"
              aria-label="Previous slide"
            >
              <span className="text-3xl">&laquo;</span>
            </button>

            <div className="w-full overflow-hidden">
              <motion.div
                className="flex"
                initial={{ x: 0 }}
                animate={{ x: -currentSlide * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full px-8">
                    <div className="bg-white p-6 rounded-lg w-full max-w-xs mx-auto text-center">
                      <h3 className="text-4xl font-bold" style={{ color: "#f05122" }}>
                        {slide.title}
                      </h3>
                      <p className="text-gray-700 uppercase text-sm font-medium mt-2">{slide.subtitle}</p>
                      <p className="text-3xl font-bold mt-1" style={{ color: "#000000" }}>
                        {slide.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 text-white opacity-70 hover:opacity-100"
              aria-label="Next slide"
            >
              <span className="text-3xl">&raquo;</span>
            </button>
          </motion.div>
        </div>

        <div className="mt-auto flex justify-center space-x-1">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className={`h-2 rounded-full ${currentSlide === dot ? "w-6 bg-white" : "w-2 bg-white/50"}`}
              animate={{ width: currentSlide === dot ? 24 : 8 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <div className="mt-4">
          <label className="flex items-start text-white text-sm bg-white/10 p-2 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 mr-2 w-4 h-4"
              style={{ accentColor: "#000000" }}
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
            />
            <span>
              By entering my phone number, I agree to receive <strong>PERDIGI CHECKIN</strong> notifications via auto
              text! Unsubscribe anytime and still participate in <strong>PERDIGI CHECKIN</strong>.
            </span>
          </label>
        </div>
      </div>

      {/* Right Side - Phone Entry */}
      <div className="w-full md:w-1/2 bg-white p-6 flex flex-col">
        <div className="flex justify-end mb-4">
          <div className="flex items-center">
            <div
              className="h-6 w-6 rounded-full flex items-center justify-center mr-1"
              style={{ backgroundColor: "#f05122" }}
            >
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-gray-800">PERDIGI</span>
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">PLEASE ENTER PHONE NUMBER</h2>
          <p className="text-gray-600 text-sm">Your info will not be shared with any third party</p>
        </div>

        <div className="mb-8">
          <div className="phone-input h-14 border-2 border-gray-200 rounded-lg flex items-center justify-center text-3xl font-bold text-gray-800">
            {formatPhoneNumber(phoneNumber) || "Enter your number"}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-16 rounded-full border flex items-center justify-center text-2xl font-medium transition-colors"
              style={{
                borderColor: "#f05122",
                color: "#f05122",
              }}
              whileTap={{ scale: 0.95, backgroundColor: "rgba(240, 81, 34, 0.1)" }}
            >
              {num}
            </motion.button>
          ))}
          <motion.button
            onClick={handleClear}
            className="h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            whileTap={{ scale: 0.95, backgroundColor: "rgba(156, 163, 175, 0.1)" }}
          >
            <ArrowLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={() => handleNumberClick("0")}
            className="h-16 rounded-full border flex items-center justify-center text-2xl font-medium transition-colors"
            style={{
              borderColor: "#f05122",
              color: "#f05122",
            }}
            whileTap={{ scale: 0.95, backgroundColor: "rgba(240, 81, 34, 0.1)" }}
          >
            0
          </motion.button>
          <motion.button
            onClick={handleBackspace}
            className="h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            whileTap={{ scale: 0.95, backgroundColor: "rgba(156, 163, 175, 0.1)" }}
          >
            <X className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="mt-auto mb-4">
          <motion.button
            onClick={handleCheckin}
            className={`w-full py-5 rounded-full text-white font-bold text-xl transition-colors relative overflow-hidden`}
            style={{
              backgroundColor: phoneNumber.length >= 10 ? "#f05122" : "rgba(240, 81, 34, 0.6)",
            }}
            whileHover={phoneNumber.length >= 10 ? { scale: 1.02 } : {}}
            whileTap={phoneNumber.length >= 10 ? { scale: 0.98 } : {}}
          >
            {phoneNumber.length < 10 && (
              <span className="absolute inset-0 flex items-center justify-center">
                {10 - phoneNumber.length} more digits needed
              </span>
            )}
            <span className={phoneNumber.length < 10 ? "opacity-0" : ""}>CHECK-IN</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
