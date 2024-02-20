import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

import CardNav from "./CardNav";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

interface QuarterData {
  [key: string]: number | undefined; // e.g., "Q1-23", "Q2-23", ...
}

interface Product {
  name: string;
  quarters: QuarterData[]; // Dynamic keys for quarters (e.g., "Q1-23", "Q2-23", ...)
}

interface CardDemoProps {
  pagination?: boolean;
  className?: string;
  number: number;
  products: Product[];
  total: { [key: string]: number }; // Dynamic keys for quarters in total section
}

export function CardDemo({
  pagination = false,
  className,
  products,
  total,
  number,
}: CardDemoProps) {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<{ [key: string]: number }[]>([]);

  useEffect(() => {
    // Extracting column headings (quarters)
    const columnKeys = Object.keys(total);
    setColumns(columnKeys);

    // Extracting rows (products)
    const productRows = products.map((product) => {
      const rowData: { [key: string]: number } = {};
      product.quarters.forEach((quarter, index) => {
        const quarterKey = columnKeys[index];
        rowData[quarterKey] = quarter[quarterKey] || 0;
      });
      return rowData;
    });
    setRows(productRows);
  }, [products, total]);
  return (
    <div className={cn("shadow-md rounded-2xl", className)}>
      <CardNav number={number} className={className} />
      <Separator />
      {number !== 1 ? (
        <div className="flex flex-col items-center">
          <div className="flex pt-4 pl-6 pr-4">
            {/* Product names */}
            <div className="flex justify-center text-sm">
              <div className="pr-3">
                <span
                  className={`text-white font-bold ${
                    products.length > 4 ? "pr-6" : ""
                  }`}
                >
                  Product
                </span>
                {products.map((product) => (
                  <div
                    key={product.name}
                    className={`text-xs  ${
                      products.length > 4 ? "pr-6" : "max-w-[56px] truncate"
                    } text-white/60 my-1`}
                  >
                    {product.name}
                  </div>
                ))}
                <div
                  className={`pt-1 text-customWhite font-semibold ${
                    products.length > 4 ? "pr-6" : ""
                  }`}
                >
                  Total
                </div>
              </div>
            </div>
            {/* Column headings and data */}
            {columns.map((column) => (
              <div key={column} className="flex">
                <Separator orientation="vertical" />
                <div className="flex flex-col justify-center items-center px-1">
                  <span className="text-white/60 text-sm font-semibold pb-1 pr-1">
                    {column}
                  </span>
                  {rows.map((row, index) => (
                    <div key={index} className="text-xs pb-1 text-white/60 ">
                      {row[column] ? `${row[column]}%` : ""}
                    </div>
                  ))}
                  <div className="text-xs pt-2 text-customWhite font-bold">
                    {total[column] ? `${total[column]}%` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {pagination ? (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink size="custom" href="#">
                    <div></div>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink size="custom" href="#">
                    <div></div>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink size="custom" href="#">
                    <div></div>
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : (
            <div className="pb-0 text-transparent">- </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex pt-4 pl-6 pr-4">
            {/* Product names */}
            <div className="flex justify-center text-sm">
              <div className="pr-3">
                <span className={`text-customPurple font-bold`}>Product</span>
                {products.map((product) => (
                  <div
                    key={product.name}
                    className={`text-xs  ${
                      products.length > 5 ? "" : "max-w-[56px] truncate"
                    } truncate text-gray-400  my-1`}
                  >
                    {product.name}
                  </div>
                ))}
                <div className="pt-1 text-customBlack font-semibold">Total</div>
              </div>
            </div>
            {/* Column headings and data */}
            {columns.map((column) => (
              <div key={column} className="flex">
                <Separator orientation="vertical" />
                <div className="flex flex-col justify-center items-center px-1">
                  <span className="text-customPurple/60 text-sm font-semibold pb-1 pr-1">
                    {column}
                  </span>
                  {rows.map((row, index) => (
                    <div key={index} className="text-xs pb-1 text-gray-400 ">
                      {row[column] ? `${row[column]}%` : ""}
                    </div>
                  ))}
                  <div className="text-xs pt-2 text-customBlack font-bold">
                    {total[column] ? `${total[column]}%` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {pagination ? (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink size="custom" href="#">
                    <div></div>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink size="custom" href="#">
                    <div></div>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink size="custom" href="#">
                    <div></div>
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : (
            <div className="pb-0 text-transparent">- </div>
          )}
        </div>
      )}
    </div>
  );
}
