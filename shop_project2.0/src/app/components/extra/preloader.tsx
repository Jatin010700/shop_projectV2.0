// Import jellyTriangle only in a browser environment
if (typeof window !== 'undefined') {
  const { jellyTriangle } = require('ldrs');
  jellyTriangle.register();
}
type preloaderProps = {
  className: string
}
export default function Preloader({className}:preloaderProps) {
  return (
    <div className={className}>
      <l-jelly-triangle size="30" speed="1.75" color="#ff3333"></l-jelly-triangle>
    </div>
  );
}

// "#ff3333"
