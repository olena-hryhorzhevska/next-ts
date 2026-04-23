type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Current path: {slug?.join(' / ') || 'Home'}</p>
    </div>
  );
}

// notes/filter/all
// notes/filter/work
// notes/filter/personal
