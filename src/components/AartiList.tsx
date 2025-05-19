import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

export interface AartiItem {
  id: string;
  deity: string;
  title: string;
  thumbnail: string;
}

interface AartiListProps {
  aartis: AartiItem[];
}

const AartiList: React.FC<AartiListProps> = ({ aartis }) => {
  // Group aartis by deity
  const groupedAartis = aartis.reduce((acc, aarti) => {
    if (!acc[aarti.deity]) {
      acc[aarti.deity] = [];
    }
    acc[aarti.deity].push(aarti);
    return acc;
  }, {} as Record<string, AartiItem[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedAartis).map(([deity, deityAartis]) => (
        <Card key={deity} className="border border-divine/20 hover:border-divine/40">
          <CardContent className="p-2">
            <h2 className="text-2xl font-bold text-divine mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-divine-gold/20 flex items-center justify-center">
                <span className="text-2xl text-divine font-bold">{deity.charAt(0)}</span>
              </div>
              {deity}
            </h2>
            <div className="space-y-3">
              {deityAartis.map((aarti) => (
                <Link 
                  key={aarti.id} 
                  to={`/aarti/${aarti.id}`}
                  className="block rounded-lg hover:bg-divine/5 transition-colors"
                >
                  <span className="text-gray-700 hover:text-divine transition-colors">
                    {aarti.title}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AartiList;
