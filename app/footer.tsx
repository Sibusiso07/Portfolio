import Image from "next/image";

const d = new Date();
let year = d.getFullYear();

export default function Footer() {
    return (
      <div className="flex justify-center py-8 bg-gray-800 text-white">
        <strong className="mx-4">© Sibusiso Simelane {year}</strong>
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
    )
}
