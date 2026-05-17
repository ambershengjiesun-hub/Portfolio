import { useData } from '../LanguageContext'

export default function Footer() {
  const { personal } = useData()

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-sm text-gray-400">
            {personal.name} · {personal.tags[0]}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {personal.phone} · {personal.email}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">
            <a
              href={`https://${personal.website}`}
              className="text-brand-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {personal.website}
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-gray-800/50">
        <p className="text-xs text-gray-600 text-center">{personal.disclaimer}</p>
      </div>
    </footer>
  )
}
