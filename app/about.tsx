import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  return (
    <div className="flex justify-center items-center h-80 text-white">
      <div className="w-4/5 mx-auto">
        <div className="flex h-1 space-x-0">
          <div className="flex-shrink-0 w-1/2 pl-20">
            <Image
              src="/image.jpg"
              width={300}
              height={300}
              alt="Sibusiso Simelane"
              className="rounded-full"
            />
          </div>
          <div className="flex-shrink-0 w-1/2">
            <h3 className="text-4xl font-bold mb-8">About Me</h3>
            <br />
            <p>
              Sibusiso S. Simelane is an IT professional with 8+ years' experience,
              from cashier at casinos to IT Network Administrator at TonTrac
              Analytics. He is Richfield, HyperionDev, & Udemy trained. Skilled
              in HTML, CSS, JavaScript & React. A sports enthusiast, gamer, and
              programmer, his dynamic journey unfolds in a rapidly evolving tech
              landscape.
            </p>
            <br />
            <Dialog>
              <DialogTrigger>Read more...</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>About Me</DialogTitle>
                  <DialogDescription>
                    <p>
                      Sibusiso S. Simelane is a dedicated and skilled IT
                      professional with a diverse background in both technical
                      support and network administration. He holds a Diploma in IT
                      from Richfield Graduate Institute of Technology, and
                      further honed his skills through a Software Engineering
                      Bootcamp Certificate from HyperionDev, a Web Development
                      Course from Udemy, and certifications in Microsoft Azure AI
                      Fundamentals and Data Fundamentals. Sibusiso has also
                      acquired various short course IT certificates, showcasing
                      his commitment to continuous learning and staying updated
                      in the dynamic field of technology.
                    </p>
                    <br />
                    <p>
                      Sibusiso's professional journey began with a 27-month stint
                      as a cashier at The Ridge Casino, demonstrating his
                      versatility and adaptability. He then transitioned into the
                      IT realm, accumulating a wealth of experience over the
                      years. His roles have included 44 months as an IT Systems
                      Support at The Ridge Casino, 6 months as an IT Field
                      Technician at Tradelink Retail Systems, and 10 months as an
                      IT Systems Support at Gold Reef City Casino & Theme Park.
                      And 10 months as an IT Network Administrator at TonTrac 
                      Analytics, where he has been contributing his expertise.
                    </p>
                    <br />
                    <p>
                      Beyond his professional achievements, Sibusiso is a
                      well-rounded individual with diverse interests. He is
                      passionate about sports, including soccer, cricket,
                      baseball, and basketball. In his leisure time, he enjoys
                      engaging with console and computer games, exploring
                      programming languages such as HTML, CSS, JavaScript,
                      NodeJS, React, Python, Java, and NextJS. Sibusiso's love for
                      challenges is reflected in his interest in puzzles, and he
                      also finds time to indulge in anime, movies, and series.
                    </p>
                    <br />
                    <p>
                      Sibusiso's journey showcases not only his technical
                      proficiency but also his adaptability and passion for
                      learning. His combination of skills, experience, and
                      diverse interests positions him as a valuable asset in the
                      ever-evolving field of IT.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="flex py-10 text-white">
              <strong className="flex items-center mx-4">
                <a href="https://github.com/Sibusiso07" className="flex items-center">
                  <Image
                    src="/Github.png"
                    width={30}
                    height={30}
                    alt="Github"
                    className="rounded-full mr-2"
                  />
                  GitHub
                </a>
              </strong>
              <strong className="flex items-center mx-4">
                <a href="https://www.linkedin.com/in/surprise-simelane-94118a14a/" className="flex items-center">
                  <Image
                    src="/LinkedIn.jpg"
                    width={30}
                    height={30}
                    alt="LinkedIn"
                    className="rounded-full mr-2"
                  />
                  LinkedIn
                </a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
