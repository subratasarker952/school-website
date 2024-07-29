const GalleryCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body absolute hover:hidden">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">view</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
