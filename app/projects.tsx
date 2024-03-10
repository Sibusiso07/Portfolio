// Projects component
"use client"

import NoteKeeperProject from "./Projects/note-keeper";
import QuizProject from "./Projects/quiz-game";
import WineListProject from "./Projects/wine-list-app";

const Projects = () => {
  return (
    <div className="flex justify-center items-center h-screen text-white mt-40">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-24">Projects</h1>
        <div className="flex flex-wrap space-x-20">
          <NoteKeeperProject />
          <QuizProject />
          <WineListProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
