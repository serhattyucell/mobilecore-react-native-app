import { getHomeSummary } from './home.service';

describe('home.service', () => {
  it('returns non-empty home summary', () => {
    const summary = getHomeSummary();

    expect(summary.title.length).toBeGreaterThan(0);
    expect(summary.subtitle.length).toBeGreaterThan(0);
  });
});
