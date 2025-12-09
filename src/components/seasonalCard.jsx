export function SeasonalCard({ img2, img, txt, para, he, wi,fonts }) {
  return (
    <div
      className="bg-white p-4 rounded-2xl overflow-hidden hover:scale-110 shadow-2xl flex flex-col items-center justify-evenly"
      style={{ width: wi, height: he }}
    >
      {/* Image 1 */}
      {img && (
        <div className="rounded-full bg-[url('/images/greencircle.png')] size-[150px] lg:size-[100px] flex items-center
         justify-center bg-cover bg-center">
          <img src={img} className="size-[90px] lg:size-[70px] object-contain" />
        </div>
      )}

      {/* Image 2 */}
      {img2 && (
        <div className="rounded-full bg-gray-200 size-[150px] lg:size-[100px] flex items-center justify-center">
          <img src={img2} className="size-[90px] lg:size-[70px] object-contain" />
        </div>
      )}

      <h1 className="text-center text-gray-800 font-semibold h-[50px] w-full" style={{fontSize:fonts}}>{txt}</h1>
      <p className="text-center text-[13px] text-gray-700 w-full">{para}</p>
    </div>
  );
}
