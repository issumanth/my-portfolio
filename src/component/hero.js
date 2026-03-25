import bgVideo from "../assets/bgv.mp4"; // <-- your video file

// Use the public folder image directly so path is exactly what you placed in public/Pp.jpeg
const profile = process.env.PUBLIC_URL + "/Pp.jpeg";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center w-full px-60 py-40 overflow-hidden">
      
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={profile}
          alt="profile"
          className="w-80 h-80 rounded-full border-4 border-blue-500 shadow-lg"
        />

        <h1 className="text-4xl md:text-7xl font-extrabold text-white">
          GODUGU SUMANTH
        </h1>

        <p className="mt-4 text-gray-300">
          Aspiring Student at <span className="text-blue-400">Sandip University</span> Persuing <span className="text-blue-400">B.Tech</span> in <span className="text-blue-400">Computer Science and Engineering</span> with a specialization in <span className="text-blue-400">Artificial Intelligence and Machine Learning</span>.
        </p>

        <p className="mt-4 max-w-3xl text-blue-300">
          Never give up — there are infinite chances until you die.
        </p>

        <p className="mt-2 text-gray-400">
          Veldurthi, Kurnool, Andhra Pradesh, India
        </p>
      </div>
    </section>
  );
}

export default Hero;