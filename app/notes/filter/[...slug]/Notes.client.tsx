'use client';

import NotesClient from '../../Notes.client';

type Props = {
  tag?: string;
};

export default function FilterNotesClient({ tag }: Props) {
  return <NotesClient tag={tag} />;
}