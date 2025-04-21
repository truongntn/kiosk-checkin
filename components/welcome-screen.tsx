"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface WelcomeScreenProps {
  onTap: () => void
}

export default function WelcomeScreen({ onTap }: WelcomeScreenProps) {
  return (
    <motion.div
      className="relative w-full h-full overflow-hidden cursor-pointer"
      onClick={onTap}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background layers */}
      <div className="absolute inset-0" style={{ backgroundColor: "#ffda44" }}></div>

      {/* Centered smaller background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ backgroundColor: "#ffb347" }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ backgroundColor: "#f05122" }}
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, -1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        ></motion.div>

        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{ backgroundColor: "#e63946" }}
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>

        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{ backgroundColor: "#000000" }}
          animate={{
            scale: [1, 1.01, 1],
            rotate: [0, -0.5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1.5,
          }}
        ></motion.div>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="absolute top-10 px-6 py-3 rounded-full flex flex-col items-center">
          <div className="w-40 h-auto">
            <Image src="images/perdigi.png" alt="Perdigi Logo" width={200} height={80} priority />
          </div>
        </div>

        {/* TAP TO CHECKIN text */}
        <motion.div
          className="text-center z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <h1 className="text-5xl font-bold mb-2">TAP TO</h1>
          <h1 className="text-6xl font-bold">CHECKIN</h1>
        </motion.div>

        {/* Beauty Icons */}
        {/* Nail Polish Icon */}
        <motion.div
          className="absolute left-16 top-1/4"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M16 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4" />
            <path d="M14 2H10v2h4V2z" />
            <path d="M14 4H10v8h4V4z" />
            <path d="M10 9l4-3" />
          </svg>
        </motion.div>

        {/* Nail File Icon */}
        <motion.div
          className="absolute right-16 top-1/4"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <rect x="6" y="3" width="12" height="3" rx="1" />
            <path d="M6 6l12 12" />
            <path d="M6 18l12-12" />
            <path d="M4 20l16-16" />
            <path d="M8 22l12-12" />
          </svg>
        </motion.div>

        {/* Hand with Nails Icon */}
        <motion.div
          className="absolute left-20 bottom-1/4"
          animate={{
            y: [0, 8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M21 7c-.5-1-2-3-4.5-3S12 5 12 7v11" />
            <path d="M19 7c-.5-1-2-3-4.5-3S10 5 10 7v11" />
            <path d="M17 7c-.5-1-2-3-4.5-3S8 5 8 7v11" />
            <path d="M15 7c-.5-1-2-3-4.5-3S6 5 6 7v11" />
            <path d="M6 18h12" />
            <path d="M6 18a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4" />
          </svg>
        </motion.div>

        {/* Makeup Brush Icon */}
        <motion.div
          className="absolute right-20 bottom-1/4"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1.5,
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M18 3l-4 4" />
            <path d="M14 7l-1.5 1.5" />
            <path d="M9.5 11.5L4 17" />
            <path d="M3 21l4-4" />
            <path d="M12.5 8.5l3-3" />
            <path d="M16 5l.5-.5c.83-.83 2.17-.83 3 0 .83.83.83 2.17 0 3L19 8" />
            <path d="M12.5 8.5l-3 3" />
            <path d="M9.5 11.5L8 13" />
          </svg>
        </motion.div>

        {/* Lipstick Icon */}
        <motion.div
          className="absolute left-1/4 top-1/3"
          animate={{
            y: [0, 5, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.7,
          }}
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M14 3h-4v9h4V3z" />
            <path d="M14 12l-2 7-2-7" />
            <path d="M10 12h4" />
            <rect x="9" y="19" width="6" height="2" rx="1" />
          </svg>
        </motion.div>

        {/* Scissors Icon */}
        <motion.div
          className="absolute right-1/4 top-1/3"
          animate={{
            y: [0, -5, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1.2,
          }}
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M20 4L8.12 15.88" />
            <path d="M14.47 14.48L20 20" />
            <path d="M8.12 8.12L12 12" />
          </svg>
        </motion.div>

        {/* Perfume Icon */}
        <motion.div
          className="absolute left-1/3 bottom-1/3"
          animate={{
            y: [0, -7, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.3,
          }}
        >
          <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M10 6h4" />
            <path d="M12 3v3" />
            <path d="M9 10h6v11a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V10z" />
            <path d="M9 10c0-1 1-2 3-2s3 1 3 2" />
            <path d="M12 15a2 2 0 0 0 2-2" />
          </svg>
        </motion.div>

        {/* Mirror Icon */}
        <motion.div
          className="absolute right-1/3 bottom-1/3"
          animate={{
            y: [0, 7, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1.8,
          }}
        >
          <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 21a9 9 0 0 0 9-9V4H3v8a9 9 0 0 0 9 9z" />
            <path d="M12 3v18" />
            <path d="M3 8h18" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
