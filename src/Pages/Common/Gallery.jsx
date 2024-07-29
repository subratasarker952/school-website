import { useState } from "react";


const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const photos = [
    {
      id: 1,
      src: '/01.jpg',
      alt: "Sports Day",
      event: "Sports",
      date: "2023-01-01",
    },
    {
      id: 2,
      src: '/02.jpg',
      alt: "Science Exhibition",
      event: "Science",
      date: "2023-02-01",
    },
    {
      id: 3,
      src:'/03.jpg',
      alt: "Cultural Fest",
      event: "Cultural",
      date: "2023-03-01",
    },
  ];
  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter((photo) => photo.event === filter);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8  text-center">Gallery</h2>

      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "Sports" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Sports")}
        >
          Sports
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "Science" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Science")}
        >
          Science
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "Cultural" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Cultural")}
        >
          Cultural
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {filteredPhotos?.map((photo) => (
          <div
            key={photo.id}
            className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

// Photos:
// sports_day.jpg: "Students participating in various sports events."
// science_exhibition.jpg: "Students presenting their science projects."
// cultural_fest.jpg: "Students performing in the cultural fest."
// classroom.jpg: "A glimpse of our interactive classrooms."
// library.jpg: "Students reading and studying in the school library."
// Videos:
// school_tour.mp4: "Virtual tour of Springdale Public School."
// annual_function.mp4: "Highlights from the Annual Function 2023."
