"use client"
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {

const router = useRouter()
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-white">
      <div className="my-4">
<button onClick={()=> router.push("/")} className="bg-[#ededed] px-2 rounded-lg cursor-pointer">
<IoArrowBackSharp className="text-2xl text-black " />
</button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">🔒 Privacy Policy</h1>

      <p className="mb-4">
        At Vestvale Estate, we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, store, and protect information gathered from visitors, clients, and partners through our website and services. We encourage you to read this policy carefully to understand our practices regarding your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of data:
        <br />
        Personal Information: Name, email address, phone number, location, and preferences (via contact forms or newsletter sign-up).
        <br />
        Browsing Information: IP address, browser type, pages visited, and duration using cookies.
        <br />
        Communication Data: Any information you provide when contacting us, such as inquiries or feedback.
        <br />
        Property Interests: Information related to your interest in properties, such as location preferences, budget, and specific requirements.
        <br />
        Project Interests: Any information submitted when requesting property details, 3D walkthroughs, or investment opportunities.
        <br />
        Analytics Data: Data collected through analytics tools to understand user behavior and improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
      <p className="mb-4">
        Your information helps us improve our website, personalize your experience, and respond to inquiries or service requests. We use your information to:
        <br />
        Provide personalized property recommendations based on your preferences
        <br />
        Process inquiries and requests for property information or 3D walkthroughs
        <br />
        Respond to inquiries and service requests
        <br />
        Provide updates about Vestvale Estate developments
        <br />
        Improve website functionality and user experience
        <br />
        Conduct market research and analysis to enhance our services
        <br />
        Send promotional offers or newsletters (you may opt out at any time)
        <br />
        Comply with legal obligations and protect our rights
        <br />
        Analyze website traffic and engagement
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We do not sell your information. We may share it with trusted partners who assist in operating our website or servicing and with trusted third-party service providers (e.g., payment processors, hosting partners, or design platforms) under strict confidentiality agreements. The information shared is limited to what is necessary for them to perform their functions. We may also disclose your information if required by law or to protect our rights, privacy, safety, or property, or that of others.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience. You can disable cookies via your browser settings. Check our <a href="/cookie-policy" className="underline">Cookie Policy</a> for more details on how we use cookies and your choices regarding them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4"> You have the right to:
        <br />
        Access or update your personal data
        <br />
        Request deletion of your data
        <br />
        Object to or restrict processing of your data
        <br />
        Withdraw consent for marketing communications
        <br />
        File a complaint with your local data protection authority
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        For any privacy-related questions, email us at <a href="mailto:support@vestvale.com" className="underline">support@vestvale.com</a>.
      </p>
    </main>
  );
}
