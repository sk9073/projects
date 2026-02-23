
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | OHM MARUTHI',
  description: 'Disclaimer for Ohm Maruthi Insurance services.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <p className="text-gray-600">
        This is a placeholder for the Disclaimer. Content coming soon.
      </p>
    </div>
  );
}
