import { ImageFallback } from "app/components";

export default function Loading() {
  return (
    <div className="loadingPage">
      <ImageFallback
        src="/images/avatar.gif"
        alt="Loading"
        width={200}
        height={200}
      />
      <div className="preloaderText">
        <span>Loading</span>
        <span className="preloaderDots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </div>
    </div>
  );
}
