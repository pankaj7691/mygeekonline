import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header 
      onCallNow={() => console.log('Call now clicked')}
      onBookSession={() => console.log('Book session clicked')}
    />
  );
}