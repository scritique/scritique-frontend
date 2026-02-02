import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const TermsConditionsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center text-black"
                    >
                        Terms and Conditions
                    </motion.h1>
                    <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed text-left">
                        <div className="space-y-4">
                            <p>
                                Your use of this website constitutes your agreement with the terms and conditions as stated below. If you disagree with any of these terms and conditions, do not use this website.
                            </p>
                            <p>
                                If you are an under-aged person, you are not allowed to access or use this website. You further acknowledge and agree that you must be of legal age to start cooperation with this website.
                            </p>
                            <p>
                                Please note that this Agreement (as this term defined hereunder) and this Website, in particular, are for general audience and not intentionally targeted to children. So please note that we do not knowingly collect any personal data from anyone under fourteen (14) years of age.
                            </p>
                            <p>
                                Please review our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> for more information about our practices related to how we collect, store and process your personal data.
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Usage of website content</h2>
                            <p>
                                Scritique is a platform where people look out for academic writing services. The platform serves clients who choose to seek such services. Before placing an order, all the information furnished should be verified carefully and users should ensure that they provide true details. In case any information turns out to be false, Scritique has the right to take necessary actions as per its established policies. Therefore, clients are requested to provide accurate data before they submit the same on this platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Copyrights and trademarks</h2>
                            <p>
                                All the materials on this platform exclusively belong to Scritique. These contents are presented on the website and include but are not limited to audio, graphics, images, video clips, page headers, logos, and content. These resources are subject to Scritique’s Trademark and Copyright ownership. Scritique reserves the right to the content downloaded from the portal. Without prior consent from Scritique, the content cannot be modified, used, or copied.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Disclaimers</h2>
                            <p>
                                Scritique clearly states that this agreement nullifies all prior or ongoing understandings and settlements. This applies to both written and oral communications regarding the matter. If there’s any alteration to the contract, it needs to be presented in written format to obtain the company’s approval before it becomes effective.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Limitation of liability</h2>
                            <p>
                                No employee of Scritique or any member acting on the company’s behalf can be held accountable for any understanding, purpose, or action taken or made in good faith. The client remains responsible for any damage, and the company doesn’t bear any liability for direct, indirect, special, disciplinary, secondary, or consequential data loss. The information and data obtained on the website use should be used at your risk and responsibility. The company doesn’t remain legally answerable for any matter.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Entire agreement</h2>
                            <p>
                                The terms and conditions stipulated above cover the agreement between Scritique and its clients regarding how this website is supposed to be used. However, it is not limited to these conditions. All the previous written or oral contracts remain null and void as this new agreement is entered. Any change in policy or a policy rejection after this point needs to be presented in writing, and the signature of the company has to be obtained.
                            </p>
                            <p className="mt-4">
                                Scritique reserves the right to update, modify, or delete any provision of these terms and conditions at their discretion. Scritique doesn’t remain obliged to inform you on this matter beforehand under any case.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Revision</h2>
                            <p>
                                Any changes to the initially agreed-upon requirements will not qualify for free revisions and will incur additional charges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Confidentiality</h2>
                            <p>
                                All the information received from the Writers and the Customers is kept in complete confidentiality and is not sold/shared with any third parties. Detailed information considering the privacy issues is available in the <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> at the Website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black">Amendments to these T&C</h2>
                            <p>
                                We strive to improve the quality of our services and thus can change these Terms of Use from time to time. All the amendments will be available on this page.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-gray-500 font-medium">Last updated on January 26, 2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsConditionsPage
