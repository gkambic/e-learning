
import Video from 'next-video';
//import getStarted from '/videos/ejemplo.mp4';

export default function PruebaPage() {
  const getStarted = '/videos/ejemplo.mp4'
  return <video width="320" height="240" controls preload="none">
  <source src={getStarted} type="video/mp4" />
  Your browser does not support the video tag.
</video>;
}