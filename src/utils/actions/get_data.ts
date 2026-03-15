export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/69add3c5db2ad58a8e7c327c?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`, {next: {revalidate: 120}}
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return res.json();

  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
}
