import React from "react";
import Link from "next/link";

const Pagination = ({ pageNo }) => {
  return (
    <div className="flex justify-between items-center absolute bottom-4 w-full px-5">
      <Link
        href={pageNo <= 1 ? "/" : `http://localhost:3000/page/${pageNo - 1}`}
        className="font-semibold hover:underline hover:text-green-700"
      >
        Previous
      </Link>
      <Link
        href={`http://localhost:3000/page/${pageNo + 1}`}
        className="font-semibold hover:underline hover:text-green-700"
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
