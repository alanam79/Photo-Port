import React from "react";
// helper function must be imported before it can be used
import { capitalizeFirstLetter } from "../../utils/helpers";
// importing the small imag folder
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  // object used to display the name/description of the category selected, it is then pulled down into the section
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      {/* add images from imported photos -we need to add an alt attribute—otherwise React will issue a warning that we're  */}
      {/* missing the correct accessibility features. We also need to add some classes to the <img> tag, because we want the images 
    //   to share a grid with other images rather than take up the entire page. The following code shows the "flex-row" and "img-thumbnail mx-1" classes added: */}
      <div className="flex-row">
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Gallery;
