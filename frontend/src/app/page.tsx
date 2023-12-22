import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Feed() {
  const session = await getServerSession(authOptions);

  console.log("RETORNO DOS DADOS AQUI", session);
  if (!session) {
    redirect("/login/signin");
  }
  return (
    <div>
      <h1>Feed</h1>
    </div>
  );
}
