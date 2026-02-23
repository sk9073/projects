
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | OHM MARUTHI',
  description: 'Privacy Policy for Ohm Maruthi Insurance services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600">
        This is a placeholder for the Privacy Policy. Content coming soon.
      </p>
    </div>
  );
}
