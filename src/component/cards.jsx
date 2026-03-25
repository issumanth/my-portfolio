function Card({ title, content }) {
  return (
    <div className="bg-gradient-to-r from-black via-blue-600 to-blue-400 p-[2px] rounded-xl">

      

        <h3 className="text-xl font-semibold mb-2 text-black 
                       transition duration-300 
                       group-hover:scale-110 group-hover:text-blue-600">
          {title}
        </h3>

        <p className="text-gray-700">{content}</p>

      </div>

  
  );
}

export default Card;