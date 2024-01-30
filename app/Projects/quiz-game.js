import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  "Code1.png",
  "Code2.png",
  "App1.png",
  "Code3.png",
  "App2.png",
  "App3.png",
];

const quizComponent = () => {
  return (
    <Dialog className="w-3/4 h-3/4">
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
                  {/* <Image
                    src={`/projects/note-keeper/${imageName}`}
                    width={300}
                    height={300}
                    alt="Code"
                  /> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <DialogDescription>
            <div className='flex'>
                <h6>Still Coming</h6>
              <div>
                {/* <h6>Description:</h6>
                <p>
                  This is a software application designed for the purpose of creating, storing, and managing notes.
                  The application likely provides a user interface through which users can interact with the note-taking functionality.
                </p> */}
              </div>
              <div className="ml-8">
                {/* <h6>Stack:</h6>
                <p>React</p>
                <p>Postgres</p>
                <p>Express</p>
                <p>Cors</p>
                <p>CSS</p>
                <p>HTML</p> */}
              </div>
            </div>
          </DialogDescription>
          {/* <a href='https://github.com/Sibusiso07/Note-Keeper'><button>Github</button></a> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default quizComponent;
