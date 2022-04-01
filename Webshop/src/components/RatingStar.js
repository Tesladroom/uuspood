import "../styles/RatingStar.css";

function RatingStar({ rating, nbavis }) {
  return (
    <div className="rating" onClick={() => infoRating(rating, nbavis)}>
      {rating === 0
        ? null
        : rating === 1
        ? <span className="material-icons star">star</span>
        : rating === 2
        ? <span className="material-icons star">star star</span>
        : rating === 3
        ? <span className="material-icons star">star star star</span>
        : rating === 4
        ? <span className="material-icons star">star star star star</span>
        : <span className="material-icons star">star star star star star</span>}
      ({nbavis} Arvamust)
    </div>
  );
}

function infoRating(rating, nbavis) {
  alert("Rating is " + rating.toString() + " on " + nbavis + " client opinion");
}

export default RatingStar;
