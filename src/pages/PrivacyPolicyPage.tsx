import React, { useState } from "react"
import { motion } from "framer-motion"



const PrivacyPolicyPage: React.FC = () => {
  const cards = [
    {
      id: "website",
      label: "Website Privacy Policy",
      imageSrc: "website-privacy-policy.png" // Add image path in public folder when ready
    },
    {
      id: "job-applicant",
      label: "Job Applicant Privacy Policy",
      imageSrc: "job-applicants-privacy-policy.png" // Add image path in public folder when ready
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading - top-left, dark teal/greenish-blue */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-black"
          >
            Privacy Policy
          </motion.h1>

          {/* Cards - very rounded, subtle shadow, center-aligned */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // Card Container: Left aligned text section as per user request
                className="group relative w-full max-w-[340px] flex flex-col items-start"
              >
                {/* Image Section - large rounded corners, handling the 'behind' look */}
                <div className="w-full aspect-[4/3.5] bg-[#e8ecf0] rounded-[2.5rem] overflow-hidden shadow-sm relative z-0">
                  {card.imageSrc ? (
                    <img
                      src={card.imageSrc}
                      alt={card.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    // Placeholder color or pattern if no image
                    <div className="w-full h-full bg-gradient-to-tr from-gray-100 to-gray-200" />
                  )}
                  {/* Overlay for better text contrast if we had overlaid text, but here text is separate */}
                </div>

                {/* Text Section - Overlapping card */}
                {/* Negative margin pulls it up. Z-index puts it on top. */}
                <div
                  className="w-[88%] -mt-20 z-10 bg-[#F0F7FA] rounded-[2rem] p-6 pr-4 flex items-center justify-between gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[140px]"
                >
                  <p
                    className="text-[1.35rem] leading-tight font-medium text-[#1a4c52] text-left tracking-tight"
                  >
                    {card.label}
                  </p>

                  {/* Arrow Button - Removed as per user request */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Website Privacy Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left text-black">
              Website Privacy Policy
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-left">
              <p>
                At Scritique (hereinafter “Scritique”, “we”, “us”, or “our”), we are committed to safeguarding your personal information and respecting your privacy. This Privacy Policy is designed to help you understand what personal data we collect (both directly and through trusted third parties), why we collect it, how we use it, and the rights you are entitled to as a data subject or consumer. Our goal is to ensure transparency and trust while providing you with a secure and reliable experience when using our services.
              </p>

              <p>
                Please take a moment to read this Privacy Notice, along with any additional details we may share when we collect or process your personal data through the Scritique website, services, or events. This will help you understand how and why we use your data. (Please Note: For employees of Scritique, a separate privacy notice is provided that specifically applies to the employment relationship.)
              </p>

              <div>
                <p className="mb-4">This Privacy Policy is directed to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visitors and users of Scritique’s Services</li>
                  <li>Individuals who are our clients, consultants, & service providers and</li>
                  <li>Any other persons who communicate with us, who provide us with personal information, and/or whose personal information we receive.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* FAQ Style Accordion Component */}
          <div className="mt-16 max-w-4xl mx-auto">
            <AccordionItem
              title="Information we Collect"
              content={
                <>
                  <span className="font-semibold">Personal Information:</span> We collect the following types of personally identifiable information through this Website: your name, title, email address, and telephone numbers, as provided by you. Personal Data may also include additional details such as professional information. You may provide this information when completing forms or creating accounts on our website, registering for programs, subscribing to marketing updates, contacting our customer service team, or responding to surveys and feedback requests.
                  <br /><br />
                  <span className="font-semibold">Cookies:</span> When you access or use our Services, we may collect information regarding your website usage and device interactions. Such information is typically obtained through the use of server log files and cookies.
                </>
              }
            />
            <AccordionItem
              title="Usage of Information"
              content={
                <>
                  We use the information we collect to provide you with access to our online services and to keep you informed about our products and offerings. This includes enabling you to access and use our digital platforms, obtain information about our products and services, receive updates and communications. We may also use your information to share details about other products, programs, or services that we believe may be of interest to you, to respond to your inquiries or requests, and to enhance the design, functionality, and overall user experience of our online platforms.
                  <br /><br />
                  The information we collect from your devices is used to improve the design and functionality of our websites. We analyze this data to strengthen website security, monitor the popularity of specific pages, assess the effectiveness of our email communications, evaluate traffic levels, and review other usage trends. These insights enable us to tailor content to your interests and enhance the overall quality of our websites and related Services.
                </>
              }
            />
          </div>

          {/* Job Applicant Privacy Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left text-black">
              Job Applicant Privacy Policy
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-left">
              <p>
                This Privacy Notice applies to individuals (hereinafter “you,” “your,” “job applicants,” or “employees”) who provide personal information to Scritique (hereinafter “Scritique,” “we,” “us,” or “our”). It covers situations where personal information is provided in order to: (1) apply for or pursue employment opportunities with Scritique; (2) support decisions regarding your employment status with Scritique; (3) work as an employee of Scritique (full-time, part-time, outsourced, or as an intern); or (4) perform services under a contractual arrangement with Scritique.
              </p>
            </div>
          </motion.div>

          {/* Job Applicant FAQ Style Accordion Component */}
          <div className="mt-16 max-w-4xl mx-auto">
            <AccordionItem
              title="Information We collect"
              content={
                <ul className="space-y-4">
                  <li><span className="font-semibold">Basic information-</span> Name, Surname, prefix or title, Photograph, Country/State of residence, and preferred language.</li>
                  <li><span className="font-semibold">Contact details-</span> Email address, Mailing address, and contact number.</li>
                  <li><span className="font-semibold">Background-</span> Educational and Professional qualifications.</li>
                  <li><span className="font-semibold">Government and national identifiers-</span> National ID, Residency or work permit status, taxpayer identification numbers, or other government-issued identifiers.</li>
                  <li><span className="font-semibold">Financial details-</span> Information related to salary expectations, previous salary issued, and working hours. If we reimburse you for expenses during the recruitment process, we may also collect your bank account details.</li>
                  <li><span className="font-semibold">Recruitment-related information-</span> Results of tests or assessments, interviewer notes, and, where applicable, audio or video recordings of interviews.</li>
                  <li><span className="font-semibold">Background information-</span> where legally permitted, we may collect information as part of pre-employment screening, such as credit history, criminal records, occupational health data, debarment status, or disqualification by government or professional authorities. This information may be required to satisfy legal, regulatory, client, or contractual obligations.</li>
                </ul>
              }
            />
            <AccordionItem
              title="How We Collect"
              content={
                <>
                  We collect this information directly from you in several ways, including when you apply for a role with us, when you share your CV or resume, during interviews, meetings, and assessments, and when you contact us to provide information, seek support, or submit feedback.
                  <br /><br />
                  You may choose whether or not to provide us with special categories of personal information when requested. Deciding not to share such information will not affect the outcome of your application. However, for certain types of personal information, we may be unable to proceed with your application or respond to your communications if you choose not to provide the information we request. If you submit personal information relating to another individual, you are responsible for ensuring that you have obtained that individual’s consent to share their information with us.
                </>
              }
            />
            <AccordionItem
              title="Usage of Information"
              content={
                <div className="space-y-4">
                  <p>We use your personal information for the following purposes:</p>
                  <ul className="space-y-4 list-disc pl-5">
                    <li><span className="font-semibold">Recruitment and application management-</span> To review and respond to your application, assess your qualifications and suitability for the role, conduct interviews, meetings, tests, and other recruitment activities.</li>
                    <li><span className="font-semibold">Current and future opportunities-</span> To consider you for the position you applied for as well as other suitable opportunities within Scritique, now or in the future, and to inform you about them.</li>
                    <li><span className="font-semibold">Recruitment recordkeeping-</span> To maintain records of our hiring processes and decisions.</li>
                    <li><span className="font-semibold">Verification-</span> To check the accuracy of the information you provide, including background checks and references, where permitted by law.</li>
                    <li><span className="font-semibold">Pre-employment documentation-</span> To prepare employment offers and other documents required at the pre-contract stage.</li>
                    <li><span className="font-semibold">Process improvement-</span> To improve our recruitment processes, strengthen candidate experience, and manage internal resourcing needs.</li>
                    <li><span className="font-semibold">Communications-</span> To respond to your queries, feedback, or requests throughout the recruitment process.</li>
                    <li><span className="font-semibold">Legal and regulatory compliance-</span> To comply with our legal obligations and regulatory requirements.</li>
                  </ul>
                  <p>We will not use your personal information for purposes incompatible with those described above unless required or authorised by law.</p>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// Simple internal component for the accordion item to keep things clean
const AccordionItem: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#0f766e]' : 'text-black group-hover:text-[#0f766e]'}`}>
          {title}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-gray-600 leading-relaxed text-lg">
          {content}
        </div>
      </motion.div>
    </div>
  )
}

export default PrivacyPolicyPage
