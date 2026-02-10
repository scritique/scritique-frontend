import React from "react"
import { motion } from "framer-motion"
import { MapPinIcon } from "@heroicons/react/24/outline"

const PresenceSection: React.FC = () => {
    const indianCities = [
        "Ahmedabad",
        "Mumbai",
        "Bengaluru",
        "Delhi",
        "Kolkata",
        "Hyderabad",
        "Chennai"
    ]

    const internationalLocations = ["Malaysia", "Dubai", "Singapore"]

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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                        Our Presence
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Location Lists */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        {/* Indian Cities */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <MapPinIcon className="h-5 w-5 text-red-500 mr-2" />
                                Indian Cities
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {indianCities.map((city, index) => (
                                    <motion.div
                                        key={city}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                        className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-700 font-medium">{city}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* International Locations */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                                International Presence
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {internationalLocations.map((location, index) => (
                                    <motion.div
                                        key={location}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                        className="flex items-center space-x-2 bg-blue-50 rounded-lg p-3 hover:bg-blue-100 transition-colors duration-200"
                                    >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700 font-medium">
                                            {location}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PresenceSection
