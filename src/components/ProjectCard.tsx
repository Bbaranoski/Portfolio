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
    return (
        <div className="group border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

            <div className="overflow-hidden">
                <Image className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="text-gray-600">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span className="text-sm border px-2 py-1 rounded transition hover:bg-gray-100"
                            key={tech}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <a className="inline-block text-blue-600 hover:underline"
                    target="_blank"
                    href={github}
                >
                    Ver no GitHub
                </a>
            </div>
        </div>
    )
}