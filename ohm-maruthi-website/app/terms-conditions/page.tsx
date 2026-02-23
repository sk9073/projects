
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | OHM MARUTHI',
  description: 'Terms and Conditions for Ohm Maruthi Insurance services.',
};

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-gray-600">
        This is a placeholder for the Terms & Conditions. Content coming soon.
      </p>
    </div>
  );
}
