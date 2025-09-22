import ServicesGrid from '../ServicesGrid';

export default function ServicesGridExample() {
  return (
    <ServicesGrid onServiceClick={(service) => console.log(`Service clicked: ${service}`)} />
  );
}