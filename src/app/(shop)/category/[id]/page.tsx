
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function({ params }: Props) {

  return (
    <div>
      <h1> CategoryPage </h1>
    </div>
  );
}