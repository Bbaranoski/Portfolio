import Image from "next/image"

type Props = {
    title: string
    description: string
    technologies: string[]
    github: string
    image: string
}

export default function PojectCard({
    title,
    description,
    technologies,
    github,
    image
}: Props) {
    return(
        <div className="border rounded-lg p-6 space-y-4 hover:shadow-lg transition">

            <Image className="w-full h-48 object-cover"
                src={image}
                alt={title}
                width={600}
                height={400}
            />

            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-gray-600">{description}</p>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span className="text-sm border px-2 py-1 rounded"
                        key={tech}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a className="text-blue-600 hover:underline"
                target="_blank" 
                href={github}
            >
                Ver no GitHub
            </a>    
        </div>
    )
}