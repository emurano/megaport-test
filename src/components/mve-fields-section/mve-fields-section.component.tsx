import { useDataMveImageFields } from '@hooks/use-data-mve-image-fields.hook';
import { LoadingElement } from '../loading-element';

export interface MveFieldsSectionProps {
  mveImageId: string;
}

export function MveFieldsSection({ mveImageId }: MveFieldsSectionProps) {
  const { fields, isLoading } = useDataMveImageFields(mveImageId);

  if (isLoading) return <LoadingElement />;
  if (!fields) throw new Error('Mve fields not found');

  return (
    <div>
      {fields.map((field) => (
        <div key={field.id}>
          {field.id}
        </div>
      ))}
    </div>
  );
}
