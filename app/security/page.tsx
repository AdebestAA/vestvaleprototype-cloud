export default function SecurityPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-white">
      <h1 className="text-3xl font-bold mb-6">🛡 Security Statement</h1>

      <p className="mb-4">
        Vestvale Estate prioritizes the safety and confidentiality of all data shared with us.
        This security statement outlines our commitment to protecting your information and ensuring a secure environment for all users. You can trust that we implement robust security measures to safeguard your personal and financial data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Our Commitments</h2>
      <p className="mb-4">
        SSL encryption for secure communication
        <br />
        Firewalled servers to protect personal data
        <br />
        Regular security audits and updates to our systems
        <br />
        Regular system audits and malware scans
        <br />
        Restricted staff access to client information
        <br />
        Compliance with data protection regulations
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Third-Party Security</h2>
      <p className="mb-4">
        We ensure that any third-party platform or service provider we work with also maintains industry-standard data protection measures. We carefully vet all partners to ensure they align with our security standards. The security of your data is a shared responsibility, and we take it seriously.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Contact Us</h2>
      <p className="mb-4">
        For any privacy-related questions, email us at <a href="mailto:support@vestvale.com" className="underline">support@vestvale.com</a>.
      </p>
    </main>
  );
}
