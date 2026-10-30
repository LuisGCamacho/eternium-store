import { notFound } from "next/navigation";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function({ params }: Props) {
  const { id } = await params;

  if( id === "kids") {
    notFound()
  }

  return (
    <div>
      <h1> CategoryPage {id} </h1>
    </div>
  );
}