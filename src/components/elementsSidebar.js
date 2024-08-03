import React from 'react'

export default function elementsSidebar() {
  return (
    <div className="group relative border">
        <FontAwesomeIcon icon={faGraduationCap} className="block w-full text-left cursor-pointer p-2 hover:shadow-lg" />
        <div className="absolute left-full top-0 bg-[#5A77DF] p-4 hidden group-hover:block">
            <a href="/revision/diaria" className="block hover:underline">Revisión Diaria</a>
            <a href="/revision/quizzes" className="block hover:underline">Quizzes</a>
            <a href="/revision/juegos" className="block hover:underline">Juegos</a>
        </div>
    </div>
  )
}
