// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import Section from '../components/Section';
import Card from '../components/Card';
import Image from '../components/Image';
import { Title, Text } from '../components/Typography';

// =============================================================================
// Component
// =============================================================================

export default function AppScreen() {
  return (
    <Section>
      <Card width="20vw">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Franz_Joseph_of_Austria_1910_old.jpg"
          ratio={1 / 1}
        />
        <div style={{ padding: '1rem' }}>
          <Title>Franz Joseph</Title>
          <Text marginBottom="1rem">Kaiser</Text>
          <Text opacity="0.75">+43 677 6777 7776</Text>
          <Text opacity="0.75">franz@vonhabsburg.at</Text>
        </div>
      </Card>
    </Section>
  );
}
