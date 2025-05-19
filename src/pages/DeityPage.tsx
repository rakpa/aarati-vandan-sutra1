import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { aartiData, deitySubtitles } from '@/data/aartis';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';

// Mapping from card deity names to actual aartiData deity names
const deityDataNameMap: Record<string, string> = {
  'श्री गणेश': 'श्री गणपती बाप्पा',
  'श्री शिव': 'श्री शिव',
  'श्री विष्णु': 'श्री विष्णु',
  'श्री दुर्गा': 'श्री दुर्गा',
  'श्री हनुमान': 'श्री हनुमान',
  'श्री लक्ष्मी': 'श्री लक्ष्मी',
};

const DeityPage = () => {
  const { deity } = useParams<{ deity: string }>();
  const dataDeity = deityDataNameMap[deity || ''] || deity;
  const aartis = aartiData.filter(a => a.deity === dataDeity);
  const subtitle = deitySubtitles[deity || ''] || '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <div className="container mx-auto py-6 px-4">
        <Card className="mb-8 border-divine/20 p-6 bg-gradient-to-r from-divine/5 to-divine-gold/5 temple-bg">
          <h2 className="text-2xl md:text-3xl font-bold text-divine text-center mb-3">
            {deity}
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">{subtitle}</p>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aartis.map(aarti => (
            <Link key={aarti.id} to={`/aarti/${aarti.id}`} className="hover:scale-105 transition-transform">
              <Card className="flex flex-col items-center justify-center h-40 bg-white border-divine/10 shadow-sm">
                <div className="text-lg font-bold text-divine mb-2 text-center">{aarti.title}</div>
                {/* Optionally, add a subtitle or icon here */}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeityPage; 