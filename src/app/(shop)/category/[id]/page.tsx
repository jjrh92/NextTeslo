/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;

  }
}

export default function({params}: Props) {

  const { id } = params;

  if (  id === "kids") {
    notFound();
      
  }

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
}