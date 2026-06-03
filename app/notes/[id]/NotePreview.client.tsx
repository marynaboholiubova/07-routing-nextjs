'use client';

import { useRouter } from 'next/navigation';
import NotePreview from '@/components/NotePreview/NotePreview';

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Close
      </button>
      <NotePreview id={id} />
    </div>
  );
}