import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onCallNow={() => console.log('Hero call now clicked')}
      onBookSession={() => console.log('Hero book session clicked')}
    />
  );
}