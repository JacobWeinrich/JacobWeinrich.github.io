import "../css/CompPhotos.css";
import React, { useState } from "react";
function CompPhotos() {
  let [pageIndex, updatePageIndex] = useState(0);
  let [pageInfo, updatePageInfo] = useState([
    { sourcePath: "imgs/texture1.jpg", caption:"Image 1" },
    { sourcePath: "imgs/texture2.jpg", caption:"Image 2" },
  ]);

  function pageNext() {
    if (pageIndex >= pageInfo.length - 1) {
      updatePageIndex(0)
    } else {
      updatePageIndex(pageIndex + 1);
    }
  }
  function pagePrev() {
    if (pageIndex >= pageInfo.length - 1) {
      updatePageIndex(pageInfo.length - 1)
    } else {
      updatePageIndex(pageIndex - 1);
    }
  }

  return (
    <div className="custom-bg-3 min-vh-100 p-4">
      <div id="image-gallery" className="d-flex justify-content-center">
        {/* V IMG SRC LIST V */}
        <div
          id="image-display"
          className="d-flex"
          style={{ backgroundImage: `url(${pageInfo[pageIndex].sourcePath})` }}
        >
          {/* Back BTN */}
          <button type="button" id="backBTN" className="BTN align-self-center">
            <span
              onClick={() => pagePrev()}
              className="material-symbols-outlined image-arrow "
            >
              arrow_back
            </span>
          </button>
          {/* IMG Caption */}
          <p
            id="image-caption-display"
            className="align-self-end p-1  m-0 text-center"
          >
            {pageInfo[pageIndex].caption}
          </p>
          {/* Next BTN */}
          <button type="button" id="nextBTN" className="BTN align-self-center">
            <span
              onClick={() => pageNext()}
              className="material-symbols-outlined image-arrow"
            >
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompPhotos;
