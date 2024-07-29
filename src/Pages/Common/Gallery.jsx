import GalleryCard from "../../Components/Shared/Gallery/GalleryCard";

const Gallery = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-3 grid-cols-1 mx-auto">
            <GalleryCard/>       
            <GalleryCard/>       
            <GalleryCard/>       
            <GalleryCard/>       
            <GalleryCard/>       
            <GalleryCard/>       
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
