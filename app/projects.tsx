// Projects component
"use client"

import NoteKeeperProject from "./Projects/note-keeper";
import QuizProject from "./Projects/quiz-game";
import WineListProject from "./Projects/wine-list-app";
import FaceDectectionComponent from "./Projects/face-detection";

const Projects = () => {
  return (
    <div className="flex justify-center items-center h-screen text-white mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        <div className="flex flex-wrap space-x-20">
          <NoteKeeperProject />
          <QuizProject />
          <WineListProject />
          <FaceDectectionComponent />
        </div>
      </div>
    </div>
  );
};

export default Projects;
