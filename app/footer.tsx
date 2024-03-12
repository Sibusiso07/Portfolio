
const d = new Date();
let year = d.getFullYear();

export default function Footer() {
    return (
        <div className="flex justify-center py-4 bg-gray-800 text-white">
            <strong className="mx-4">© Sibusiso Simelane {year}</strong>
            <strong className="mx-4"><a href="https://github.com/Sibusiso07">GitHub</a></strong>
            <strong className="mx-4"><a href="https://www.linkedin.com/in/surprise-simelane-94118a14a/">LinkedIn</a></strong>
        </div>
    )
}