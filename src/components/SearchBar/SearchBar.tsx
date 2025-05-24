import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";

interface Props {
  onSubmit: (query: string) => void;
}

export const SearchBar = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
