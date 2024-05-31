export default function Skeleton({ short, inline }) {
  return (
    <div
      className="skeleton"
      style={{
        width: short ? "15em" : undefined,
        display: inline ? "inline-block" : undefined,
      }}
    />
  );
}
