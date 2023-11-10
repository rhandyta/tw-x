"use client";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

function PaginateBlog({ lastVisible, firstVisible, maxPages, page = 1 }) {
  return (
    <>
      <div>
        <Link
          // hidden={page < 2 ? true : false}
          hidden={page < 2 ? true : false}
          href={`blogs${page < 2 ? "" : page ? `?page=${page - 1}&qr=${firstVisible}` : ""}`}
        >
          <Button disabled={page < 2 ? true : false} startIcon={<ArrowBack />}>
            Previous
          </Button>
        </Link>
      </div>
      <div>
        <Link
          hidden={page >= maxPages ? true : false}
          // hidden={page > 9 ? true : false}
          href={`blogs${
            !page
              ? `?page=${parseInt(page) + 1}&ql=${lastVisible}`
              : page
              ? `?page=${parseInt(page) + 1}&ql=${lastVisible}`
              : ""
          }`}
        >
          <Button endIcon={<ArrowForward />}>Next</Button>
        </Link>
      </div>
    </>
    // <Pagination
    //   count={10}
    //   variant="outlined"
    //   shape="rounded"
    //   page={page}
    //   onChange={handleChangePage}
    // />
  );
}

export default PaginateBlog;
