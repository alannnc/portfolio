"use client";

import Link from "next/link";
import React from "react";

interface IButtonProps {
  title?: string;
  url?: string;
  img?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { title, url, img } = props;
  // If link is internal, use next/link
  if (url?.startsWith("/")) {
    return (
      <Link href={url} className="btn btn-primary">
        {title || img}
      </Link>
    );
  }
  return (
    // If link is external, use window.open
    <button
      className="btn btn-primary"
      onClick={() => {
        window.open(url);
      }}
    >
      {title || img}
    </button>
  );
};

export { Button };
