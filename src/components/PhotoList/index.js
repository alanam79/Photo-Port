import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green parrot",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Yellow macaw",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pug smile",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pancakes",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burrito",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Scallop pasta",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burger",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Fruit bowl",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green river",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Docks",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Panoramic village by sea",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Domestic landscape",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Park bench",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);
  // filter - going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user.
  // If a photo matches the condition, it is returned in an array and assigned to currentPhotos.
  // Then we can map the currentPhotos array to render each photo that matches the category selected by the user.
  const currentPhotos = photos.filter((photo) => photo.category === category);

  // declares the toggleModal
  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({ ...image, index: i });
    // when the toggleModal function is executed, the value of isModalOpen is toggled from true to false
    setIsModalOpen(!isModalOpen);
  };

  // the useState Hook in the PhotoList component to manage the current
  // photo state and make this data accessible to the Modal component through props
  // setCurrentPhoto is the setter
  const [currentPhoto, setCurrentPhoto] = useState();

  // set to false, don't want the modal to open until a user has clicked on an image
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* pass this function down as a prop to Modal, allowing us to toggle the state of the modal, */}
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
