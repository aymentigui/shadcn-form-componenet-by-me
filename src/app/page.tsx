import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-100 flex justify-center items-center">
      <div className="rounded-lg flex flex-col gap-3 bg-white p-16">
        <Link href={"/password"}>
          <Button className="w-full">
            Password component
          </Button>
        </Link>
        <Link href={"/profil-shadcn"}>
          <Button className="w-full">
            Plusieur input
          </Button>
        </Link>
      </div>
    </div>
  );
}
