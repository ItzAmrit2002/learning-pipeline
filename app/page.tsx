"use client"


const Home = () => {
  const handleCelebrate = () => {
    alert('Happy Birthday to you!');
    // You can add more functionality here, like playing a song or displaying a message
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-pink-500">Happy Birthday!</h1>
        <p className="text-2xl text-gray-600">Wishing you a day filled with love, laughter, and all your favorite things.</p>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={handleCelebrate}>
          Celebrate!
        </button>
      </div>
    </div>
  );
};

export default Home;