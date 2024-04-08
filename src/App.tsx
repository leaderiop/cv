function App() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">

        <header className="text-center mb-4">
            <h1 className="text-3xl font-semibold">Mohammad Almechkor</h1>
            <p className="text-sm">Greater Paris Metropolitan Region</p>
            <p className="text-sm">med.almechkor@gmail.com • +33 7 64 20 60 92</p>
            <a  
                href="linkedin.com/in/mohammad-almechkor-7053b5b8" 
                className="text-blue-500 underline">linkedin.com/in/mohammad-almechkor-7053b5b8
            </a>
        </header>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">Dynamic and results-driven Software Engineer with a proven track record of delivering high-quality software solutions. Equipped with a diverse skill set and extensive experience in Node.js development, ERP systems, and cloud technologies. Committed to excellence, innovation, and continuous learning, seeking opportunities to contribute expertise and drive impactful projects in a collaborative team environment.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Software Engineer - Senior Full Stack Developer</h3>
                <p className="text-gray-600">Bien'ici</p>
                <p className="text-sm text-gray-600">Dec 2023 - Present (5 months)</p>
                <p className="text-gray-700">As an adept Software Engineer, I play a pivotal role within my team, Rocket, where we are dedicated to elevating the "bien'ici" website's content...</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Software Development - Tech Lead</h3>
                <p className="text-gray-600">Bridger</p>
                <p className="text-sm text-gray-600">Jul 2022 - Nov 2023 (1 year 5 months)</p>
                <p className="text-gray-700">As a seasoned Node.js Tech Lead with a robust background in Enterprise Resource Planning (ERP) systems...</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Software Engineer - Senior Full Stack Developer</h3>
                <p className="text-gray-600">Royal Canin</p>
                <p className="text-sm text-gray-600">Oct 2021 - Apr 2022 (7 months)</p>
                <p className="text-gray-700">Experienced Software Engineer with a strong proficiency in developing robust and scalable applications...</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold">Software Development - Full Stack Developer</h3>
                <p className="text-gray-600">CloudVision Consulting</p>
                <p className="text-sm text-gray-600">Nov 2018 - Jul 2021 (2 years 9 months)</p>
                <p className="text-gray-700">As a Node.js Tech Lead, I have successfully led multiple cross-functional teams in delivering high-quality software solutions for various industries...</p>
            </div>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Licenses & Certifications</h2>
            <p className="text-gray-700">Big Data Developer - Mastery Award for Students 2016 - IBM</p>
            <p className="text-gray-700">9625-1529-9232-9276</p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside">
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>NestJS</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Svelte</li>
                <li>Tailwind CSS</li>
                <li>Rust (Programming Language)</li>
                <li>C</li>
                <li>Agile Methodologies</li>
            </ul>
        </section>

    </div>
  )
}

export default App;
