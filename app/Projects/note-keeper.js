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
  "Code1.png",
  "Code2.png",
  "App1.png",
  "Code3.png",
  "App2.png",
  "App3.png",
];

const noteKeeperComponent = () => {
  return (
    <Dialog className="h-screen my-16 mx-80">
      <DialogTrigger>
        <Image 
          src={`/projects/note-keeper/Note-Keeper.png`}
          width={300}
          height={300}
          alt='Note Keeper Image'
        />
      </DialogTrigger>
      <DialogContent className='w-5/6'>
        <DialogHeader>
          <DialogTitle>Note Keeper</DialogTitle>
          <Carousel className="items-center justify-center">
            <CarouselContent>
              {imageFiles.map((imageName, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/projects/note-keeper/${imageName}`}
                    width={300}
                    height={300}
                    alt="Code"
                    className='justify-center items-center'
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
                <h6>Description:</h6>
                <p><br />
                  This is a software application designed for the purpose of creating, storing, and managing notes.
                  The application likely provides a user interface through which users can interact with the note-taking functionality.
                </p><br />
              </div>
              <div className="ml-8 p-20">
                <h6>Stack:</h6><br />
                <ul>
                  <li>React</li>
                  <li>Postgres</li>
                  <li>Express</li>
                  <li>Cors</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter className='bg-blue-500 text-black border-black font-bold py-2 px-4 rounded'>
            <a href='https://github.com/Sibusiso07/Note-Keeper'>
              <button>Github</button>
            </a>    
          </DialogFooter>
          
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default noteKeeperComponent;
