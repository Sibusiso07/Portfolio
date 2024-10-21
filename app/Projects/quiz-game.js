import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const imageFiles = [
  "Welcome.png",
  "Main.png",
  "Code Setup.png",
  "Setup.png",
  "Quiz.png",
  "Trivia.png",
];

const quizComponent = () => {
  return (
    <Dialog className="w-full h-full">
      <DialogTrigger>
        <Image 
          src={`/projects/quiz-game/Quiz-Game.jpg`}
          width={300}
          height={400}
          alt='Note Keeper Image'
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quiz Game</DialogTitle>
          <Carousel className="w-full">
            <CarouselContent>
              {imageFiles.map((imageName, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/projects/quiz-game/${imageName}`}
                    width={300}
                    height={300}
                    alt={`${imageName}`}
                    className="justify-center items-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <DialogDescription>
            <div>
              <div>
                <strong><h6>Description:</h6></strong><br />
                <p>
                  This quiz game allows users to customize their quiz experience by selecting from a variety of categories,
                  difficulty levels, and the number of questions. The game fetches questions from an API based on the selected 
                  preferences and tracks the player's score throughout the game.
                </p><br />
              </div>
              <div className="ml-8 p-20">
                <strong><h6>Stack:</h6></strong><br />
                <p>React</p>
                <p>API</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter className='bg-blue-500 text-black border-black font-bold py-2 px-4 rounded'>
            <a href='https://github.com/Sibusiso07/Quiz-Game'>
              <button>Github</button>
            </a>    
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default quizComponent;
