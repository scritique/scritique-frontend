import React from "react"
import { motion } from "framer-motion"

const RefundPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Refund Policy</h1>
                        <p className="mb-6">
                            At Scritique, we aim to deliver high-quality academic writing
                            services. However, refund requests may be considered under
                            specific circumstances. By placing an order on this website, you
                            agree to the terms outlined in this Refund Policy.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Eligibility for refunds
                        </h2>
                        <p className="mb-6">
                            A refund request may be accepted if the delivered service
                            substantially fails to meet the agreed requirements. Clients
                            must submit any refund request within a reasonable period after
                            delivery and provide clear reasons along with any supporting
                            evidence.
                        </p>
                        <p className="mb-6">
                            If inaccurate, incomplete, or misleading instructions are
                            provided by the client, Scritique will not be responsible for
                            the resulting issues, and refund requests in such cases may be
                            declined.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Non-refundable situations
                        </h2>
                        <p className="mb-4">Refunds will not be granted if:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>
                                The client changes their major requirements after the order
                                has started.
                            </li>
                            <li>
                                The dissatisfaction is based on personal preference rather
                                than objective issues.
                            </li>
                            <li>
                                Incorrect or incomplete instructions were initially provided.
                            </li>
                            <li>
                                The client fails to request revisions before requesting a
                                refund.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Revisions before refunds
                        </h2>
                        <p className="mb-6">
                            Before processing a refund request, clients may be required to
                            request revisions so that the concerns can be properly reviewed
                            and addressed before a refund is considered.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Final decision
                        </h2>
                        <p className="mb-6">
                            All refund requests are evaluated carefully. Scritique reserves
                            the right to make the final decision at its sole discretion.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Amendments to this policy
                        </h2>
                        <p>
                            Scritique may update or modify this Refund Policy at any time.
                            Any changes will be reflected on this page and will become
                            effective immediately upon publication.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default RefundPolicyPage
