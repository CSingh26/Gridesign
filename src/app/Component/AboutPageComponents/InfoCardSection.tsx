import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBullseye, faMedal } from '@fortawesome/free-solid-svg-icons'

const icons = {
  eye: faEye,
  bullseye: faBullseye,
  medal: faMedal,
}

interface InfoCardProps {
  icon: 'eye' | 'bullseye' | 'medal'
  title: string
  description: string
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <FontAwesomeIcon icon={icons[icon]} className="text-[#000080] text-5xl mb-4" />
      <h3 className="text-2xl font-bold heading mb-2">{title}</h3>
      <p className="sub-heading">
        {description}
      </p>
    </motion.div>
  )
}

export default InfoCard