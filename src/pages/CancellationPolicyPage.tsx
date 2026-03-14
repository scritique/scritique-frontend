import React from "react"
import { motion } from "framer-motion"

const CancellationPolicyPage: React.FC = () => {
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cancellation Policy</h1>
                        <p className="mb-6">
                            At Scritique, we understand that circumstances may change after
                            an order has been placed. Hence, cancellation requests may be
                            considered under specific circumstances. By placing an order on
                            this website, you agree to the terms outlined in this
                            Cancellation Policy.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Eligibility for cancellation
                        </h2>
                        <p className="mb-6">
                            A cancellation request may be accepted if it is submitted before
                            the assigned writer has significantly started working on the
                            order. Clients should submit cancellation requests as soon as
                            possible after placing the order to allow sufficient time for
                            review.
                        </p>
                        <p className="mb-6">
                            If the work has already begun or resources have been allocated
                            to the order, Scritique may decline the cancellation request or
                            apply a partial charge depending on the stage of completion.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Non-cancellable situations
                        </h2>
                        <p className="mb-4">
                            Cancellation requests will not be approved if:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>The order has already been completed or delivered.</li>
                            <li>
                                The work is substantially in progress at the time the
                                cancellation request is made.
                            </li>
                            <li>
                                The client fails to provide valid reasons for the
                                cancellation.
                            </li>
                            <li>
                                The order is placed with urgent deadlines and work has already
                                commenced.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Partial cancellation and charges
                        </h2>
                        <p className="mb-6">
                            If a cancellation request is approved after work has already
                            started, Scritique reserves the right to retain a reasonable
                            portion of the payment to cover the work already completed and
                            resources used.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            How to request a cancellation
                        </h2>
                        <p className="mb-6">
                            Clients must submit cancellation requests through the
                            appropriate mail communication channel provided on the website.
                            The request should clearly state the order details and the
                            reason for cancellation so that it can be reviewed properly.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Final decision
                        </h2>
                        <p className="mb-6">
                            All cancellation requests are reviewed on a case-by-case basis.
                            Scritique reserves the right to make the final decision at its
                            sole discretion.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Amendments to this policy
                        </h2>
                        <p>
                            Scritique may update or modify this Cancellation Policy at any
                            time. Any changes will be reflected on this page and will become
                            effective immediately upon publication.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default CancellationPolicyPage
