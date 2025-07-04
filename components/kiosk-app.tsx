"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import WelcomeScreen from "./welcome-screen"
import CheckinScreen from "./checkin-screen"
import SuccessScreen from "./success-screen"
import axios from 'axios';

type Screen = "welcome" | "checkin" | "success"

export default function KioskApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [points, setPoints] = useState(0)
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomePhone] = useState("")

  const handleWelcomeClick = () => {
    setCurrentScreen("checkin")
  }

  const handleCheckin = async () => {
    console.log("Check-in initiated with phone number:", phoneNumber)

    // Always proceed to success screen if this function is called
    // The validation is now handled in the CheckinScreen component
    try {
      const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000/";
      const res = await axios.post(BACKEND_URL + 'api/checkin/checkin', { phone: phoneNumber });
      console.log(res.data);
      setPoints(res.data.rewardPoints);
      setCustomerName(res.data.customerName);
      setCustomePhone(res.data.customerPhone);

      const res1 = await axios.post(BACKEND_URL + 'createBooking', { customer_phone: phoneNumber });
      console.log(res1.data);

    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data?.message || 'Failed to check in');
      } else {
        console.log('An unexpected error occurred');
      }
    }
    setCurrentScreen("success")

    // Reset to welcome screen after 8 seconds
    setTimeout(() => {
      setCurrentScreen("welcome")
      setPhoneNumber("")
    }, 8000)
  }
  
  return (
    <div className="w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <WelcomeScreen onTap={handleWelcomeClick} />
          </motion.div>
        )}

        {currentScreen === "checkin" && (
          <motion.div
            key="checkin"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <CheckinScreen phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} onCheckin={handleCheckin} />
          </motion.div>
        )}

        {currentScreen === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <SuccessScreen points={points} customerName={customerName} customerPhone={customerPhone} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
