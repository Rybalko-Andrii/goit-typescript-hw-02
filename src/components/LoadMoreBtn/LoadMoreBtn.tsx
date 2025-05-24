interface Props {
  onClick: () => void;
}

export const LoadMoreBtn = ({ onClick }: Props) => (
  <button onClick={onClick}>Load more</button>
);
