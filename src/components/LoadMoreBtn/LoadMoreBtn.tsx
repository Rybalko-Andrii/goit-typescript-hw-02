import React from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return <button onClick={onClick}>Load more</button>;
};
