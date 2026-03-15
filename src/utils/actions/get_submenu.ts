export async function getSubmenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch menu data: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw new Error(`Failed to fetch menu data`);
  }
}
