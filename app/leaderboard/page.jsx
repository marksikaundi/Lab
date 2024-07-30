
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function LaderBoard() {
  return (
    <section className="w-full mx-auto py-8 md:py-12">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold">Top Performers</h2>
        <div className="w-full bg-background rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Mark Sikaundi</TableCell>
                <TableCell className="text-right font-medium">12,345</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>David Jiri</TableCell>
                <TableCell className="text-right font-medium">11,234</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell>Angela Sinonge</TableCell>
                <TableCell className="text-right font-medium">10,987</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell>Alice Williams</TableCell>
                <TableCell className="text-right font-medium">9,876</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell>Tom Davis</TableCell>
                <TableCell className="text-right font-medium">8,765</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}