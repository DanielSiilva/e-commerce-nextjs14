import data from "../data.json";

export async function GET() {
  const feateredProducts = data.products.filter((product) => product.featured);

  return Response.json(feateredProducts);
}
