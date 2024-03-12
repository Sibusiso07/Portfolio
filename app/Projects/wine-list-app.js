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
  "login.jpg",
  "Code1.jpg",
  "dashboard.jpg",
  "AddWine.jpg",
  "Code2.jpg",
  "EditWine.jpg",
  "ViewWine.jpg",
];


const wineListComponent = () => {
  return (
    <Dialog className="w-full h-full">
      <DialogTrigger>
        <Image 
          src={`/projects/wine-list-app/wine.jpg`}
          width={300}
          height={400}
          alt='Note Keeper Image'
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Wine List App</DialogTitle>
          <Carousel className="w-full">
            <CarouselContent>
              {imageFiles.map((imageName, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/projects/wine-list-app/${imageName}`}
                    width={500}
                    height={400}
                    alt="Code"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <DialogDescription>
            <div >
              <div>
                <strong><h6>Description:</h6></strong><br />
                <p>
                  This is a software application designed for the purpose of storing a list of your favorite wine.
                  The application asks the user for credentials so providing security for those who are not authorised those
                  the list. It allows you to add new wines, edit existing ones and viewing existing ones and their images.
                </p><br />
              </div>
              <div>
                <strong><h6>Stack:</h6></strong><br />
                <ul>
                  <li>NextJS</li>
                  <li>TypeScript</li>
                  <li>Postgres</li>
                  <li>Express</li>
                  <li>Cors</li>
                  <li>Tailwind</li>
                  <li>HTML</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter>
            <a href='https://github.com/Sibusiso07/My-Wine-App'><button>Github</button></a>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default wineListComponent;
