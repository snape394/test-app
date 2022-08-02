import { ShimmerButton ,ShimmerBadge,ShimmerTitle,ShimmerText,ShimmerCircularImage,ShimmerThumbnail } from "react-shimmer-effects";
  
  export const ShimmerComponent = () => {
    return (
      <div>
        <ShimmerButton size="sm" />
        <ShimmerButton size="md" />
        <ShimmerButton size="lg" />
        <ShimmerBadge width={200} />
        <ShimmerTitle />
        <ShimmerTitle line={3} variant="secondary" />
        <ShimmerText />
        <ShimmerCircularImage size={300} />
        <ShimmerThumbnail height={300} width={500} className="m-0" rounded />
      </div>
    );
  };
  
 