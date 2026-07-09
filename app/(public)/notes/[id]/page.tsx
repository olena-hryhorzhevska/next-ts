import { getSingleNote } from "@/app/lib/api/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const note = await getSingleNote(id);
  return {
    title: `Note ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note ${note.title}`,
      description: note.content.slice(0, 30),
      url: `https://next-ts-smoky.vercel.app/notes/${id}`,
      siteName: "NoteLab",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Note ${note.title}`,
      description: note.content.slice(0, 30),
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
}

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  );
};

export default NoteDetails;

// Прямой вход на /notes/id

// → новый HTML документ
// → Next.js строит страницу как полноценный route
// → metadata может быть подготовлена до отдачи HTML
// → для HTML limited bots она будет в head

// Клик внутри приложения
// → document не перезагружается
// → идет RSC payload, а не полный HTML
// → модалка вставляется в текущее дерево
// → metadata может появиться в body

// Запрос на сервер при Link есть, но это не тот же самый запрос, что при refresh.
// Refresh просит у сервера новый HTML документ со своим head.
// Link просит у сервера только данные нового маршрута, чтобы обновить React дерево без перезагрузки страницы.
// Поэтому при refresh metadata может попасть в head, а при client navigation или interception route она
// может быть добавлена позже и оказаться в body.
