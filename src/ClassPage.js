import React from "react";
import { useParams } from "react-router-dom";
import { chapters } from "./data";
import ChapterList from "./components/ChapterList";

const ClassPage = () => {
  const { id } = useParams();
  const classChapters = chapters[id] || [];

  return (
    <ChapterList
      title={`Class ${id} Mathematics - Chapters`}
      chapters={classChapters}
    />
  );
};

export default ClassPage;
