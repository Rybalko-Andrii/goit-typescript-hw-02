import React from "react";

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage = ({ text }: ErrorMessageProps) => <p>{text}</p>;
