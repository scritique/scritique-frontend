import React from "react"
import { motion } from "framer-motion"

const PresenceSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
                        Our Presence
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img 
                            src="/presence.jpeg" 
                            alt="Scritique Global Presence" 
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PresenceSection
