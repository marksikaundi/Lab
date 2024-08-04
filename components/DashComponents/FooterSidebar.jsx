import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaGear } from "react-icons/fa6";

export default function FooterSidebar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" pt-16">
      <div className="w-full px-3">
        <div className="border p-3 rounded-lg mb-4">
          <h2 className="text-lg font-bold py-2">Upgrade to pro</h2>
          <p className="pb-2 text-sm">
            Unlock all courses, get access to source code, and more.
          </p>
          <button className="bg-green-950 text-white w-full rounded-lg py-2 hover:bg-green-900">
            <Link href="https://www.lupleg.website/premium">Upgrade</Link>
          </button>
        </div>
      </div>
      <Separator className="my-4 " />
      <div className="flex space-x-4 text-xs justify-between items-center w-full px-3">
        <span>&#169; {currentYear} Lupleg Labs </span>

        <button className="hover:bg-gray-200 p-2 rounded-full">
          <Link href="/settings">
            {" "}
            <FaGear className="h-6 w-6" />
          </Link>
        </button>
      </div>
    </div>
  );
}
