import StickyPhoneButton from '../StickyPhoneButton';

export default function StickyPhoneButtonExample() {
  return (
    <div className="relative h-32">
      <StickyPhoneButton onCall={() => console.log('Sticky phone clicked')} />
    </div>
  );
}