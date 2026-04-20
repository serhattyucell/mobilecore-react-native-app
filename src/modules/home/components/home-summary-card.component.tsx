import { Text, View } from 'react-native';

import { HomeSummary } from '../interfaces/home.interfaces';
import { homePageStyles } from '../styles/home-page.styles';

interface HomeSummaryCardProps {
  summary: HomeSummary;
}

export function HomeSummaryCard({ summary }: HomeSummaryCardProps) {
  return (
    <View style={homePageStyles.card}>
      <Text style={homePageStyles.title}>{summary.title}</Text>
      <Text style={homePageStyles.subtitle}>{summary.subtitle}</Text>
    </View>
  );
}
