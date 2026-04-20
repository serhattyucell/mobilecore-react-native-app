import { AppScreen } from '../../../common/components/app.screen';
import { HomeSummaryCard } from '../components/home-summary-card.component';
import { getHomeSummary } from '../services/home.service';

export function HomePage() {
  const summary = getHomeSummary();

  return (
    <AppScreen>
      <HomeSummaryCard summary={summary} />
    </AppScreen>
  );
}
