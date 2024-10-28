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
  "unknown angle.jpg",
  "detect one.jpg",
  "imports.jpg",
  "GUI.jpg",
  "detect multiple.jpg",
  "recognition.jpg",
  "multiple unknown.jpg",
];


const FaceDectectionComponent = () => {
  return (
    <Dialog className="w-full h-full">
      <DialogTrigger>
        <Image 
          src={`/projects/face-detection/face.jpg`}
          width={300}
          height={400}
          alt='Face Detection'
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Face Detection & Recognition App</DialogTitle>
          <Carousel className="w-full">
            <CarouselContent>
              {imageFiles.map((imageName, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/projects/face-detection/${imageName}`}
                    width={500}
                    height={400}
                    alt="Code & App Screenshot"
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
                This code is a Face Detection and Recognition application using the Tkinter GUI toolkit. 
                The user can upload an image, and the application processes it to detect and recognize faces. 
                If known faces are detected, their names are displayed; otherwise, the number of unknown faces is shown.
                </p><br />
              </div>
              <div>
                <strong><h6>Stack:</h6></strong><br />
                <ul>
                  <li>Python</li>
                  <li>OpenCV (cv2)</li>
                  <li>Tkinter</li>
                  <li>PIL</li>
                  <li>face_recognition</li>
                  <li>MTCNN</li>
                  <li>Threading</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter>
            <a href='https://github.com/Sibusiso07/Face-Detection-Recognition'><button>Github</button></a>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FaceDectectionComponent;
