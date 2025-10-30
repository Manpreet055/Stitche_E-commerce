export default function Banner({children:slides}) {
 
  return (
    <div className="max-w-screen overflow-hidden ">
      <div className="w-auto flex gap-10 animate-infinite-scroll my-10">
     {slides}
    </div>
    </div>
  );
}
