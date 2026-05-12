import { getSingleNote } from "@/app/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

type Props = {
  params: Promise<{ id: string }>;
};

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
