import { useNavigate } from "react-router-dom";






function Card({ title, description, category, price, image ,single,id}) {
  
  const navigate = useNavigate();
  
  const singleProduct = () =>{
    navigate(`/single/${id}`)
  }

  
  
  
  
  return (
    <div style={{width: `300px` ,height: `700px` , padding: `20px`}} className="card-bordered   card bg-base-100 w-48 shadow-xl card-compact">
      <figure className=" px-10 pt-10">
        <img
          src={image}
          //   alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="card-title">
          <strong>Title:</strong> {title}
        </h1>
        <h2 className="">
          <strong>Category: </strong> {category}
        </h2>
        <h3 className="card">
          <strong>Price: </strong> {price}$
        </h3>
        <p>{description}</p>
        <p>{id}</p>
        <div className="card-actions">
          <button onClick={singleProduct} className="btn btn-primary">Show More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
