export async function GET(request) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return Response.json(
        { error: "Token não encontrado" },
        { status: 401 }
      );
    }

    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // Buscar posts do backend - endpoint correto é /posts
    const postsResponse = await fetch(`${API_URL}/posts`, {
      method: "GET",
      headers,
    });

    if (postsResponse.status === 401) {
      return Response.json(
        { error: "Token inválido ou expirado" },
        { status: 401 }
      );
    }

    if (!postsResponse.ok) {
      throw new Error(`Erro ao buscar posts: HTTP ${postsResponse.status}`);
    }

    const posts = await postsResponse.json();

    return Response.json(posts);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return Response.json(
      { error: error.message || "Falha ao buscar posts" },
      { status: 500 }
    );
  }
}
