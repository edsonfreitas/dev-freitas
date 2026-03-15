import { redirect } from "next/navigation";

export async function getDataSlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects/`;

  //Definindo o objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug,title,content,metadata",
    read_key: process.env.COSMIC_READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { next: { revalidate: 120 } });

    if (!response.ok) {
      throw new Error(`Failed get item by slug: ${response.status}}`);
    }

    return response.json();
  } catch (erro) {
    redirect("/");
  }
}
