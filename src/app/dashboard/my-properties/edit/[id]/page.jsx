'use client';
import { useParams } from 'next/navigation';
import EditPropertyForm from '../EditPropertyForm';

export default function EditPropertyPage() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <EditPropertyForm propertyId={id} />
    </div>
  );
}
