import CardSkeleton from "./CardSkeleton";

const Skeleton = () => {
  return (
    <div>
      {[...Array(8)].map((index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};
export default Skeleton;
