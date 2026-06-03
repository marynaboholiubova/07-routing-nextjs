'use client';

import NotePreview from '@/components/NotePreview/NotePreview';

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  return <NotePreview id={id} />;
}