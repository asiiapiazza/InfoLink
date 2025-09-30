import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  GraduationCapIcon,
  CalendarDotsIcon,
  DesktopIcon,
  GearIcon,
} from "@phosphor-icons/react";

interface Course {
  name: string;
  link: string;
  active: boolean;
  anno: number;
}

const getToday = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // i mesi partono da 0
  const yyyy = today.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

const corsi: Course[] = [
  {
    name: "Architetture Dati",
    link: "https://elearning.unimib.it/enrol/index.php?id=62112",
    active: false,
    anno: 1,
  },
  {
    name: "Bioinformatica",
    link: "https://elearning.unimib.it/enrol/index.php?id=62121",
    active: false,
    anno: 1,
  },
  {
    name: "Fondamenti Logico Matematici dell'Informatica",
    link: "https://elearning.unimib.it/enrol/index.php?id=62131",
    active: false,
    anno: 1,
  },
  {
    name: "Informatica Industriale",
    link: "https://elearning.unimib.it/enrol/index.php?id=62124",
    active: false,
    anno: 1,
  },
  {
    name: "Machine Learning",
    link: "https://elearning.unimib.it/course/view.php?id=62127",
    active: false,
    anno: 1,
  },
  {
    name: "Modelli della Concorrenza",
    link: "https://elearning.unimib.it/course/view.php?id=62133",
    active: false,
    anno: 1,
  },
  {
    name: "Teoria della Computazione",
    link: "https://elearning.unimib.it/course/view.php?id=62134",
    active: false,
    anno: 1,
  },
  {
    name: "Diritto dell'Informazione, della Comunicazione e dell'Informatica",
    link: "https://elearning.unimib.it/enrol/index.php?id=62283",
    active: false,
    anno: 1,
  },
  {
    name: "Green Computing",
    link: "https://elearning.unimib.it/enrol/index.php?id=61954",
    active: false,
    anno: 1,
  },
  {
    name: "Metodi del Calcolo Scientifico",
    link: "https://elearning.unimib.it/enrol/index.php?id=62129",
    active: false,
    anno: 1,
  },
  {
    name: "Modelli Probabilistici per le Decisioni",
    link: "https://elearning.unimib.it/enrol/index.php?id=62122",
    active: false,
    anno: 1,
  },
  {
    name: "Processo e Sviluppo del Software",
    link: "https://elearning.unimib.it/course/view.php?id=62115",
    active: false,
    anno: 1,
  },
  {
    name: "Juridical and Social Issues in Information Society",
    link: "https://elearning.unimib.it/enrol/index.php?id=61967",
    active: false,
    anno: 1,
  },
  {
    name: "Qualità del Software",
    link: "https://elearning.unimib.it/enrol/index.php?id=62123",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi Complessi e Incerti",
    link: "https://elearning.unimib.it/enrol/index.php?id=62113",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi Complessi: Modelli e Simulazione",
    link: "https://elearning.unimib.it/enrol/index.php?id=62114",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi e Servizi di Telecomunicazione",
    link: "https://elearning.unimib.it/enrol/index.php?id=62116",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi Informativi",
    link: "https://elearning.unimib.it/enrol/index.php?id=62125",
    active: false,
    anno: 1,
  },
  {
    name: "Teoria dell'Informazione e Crittografia",
    link: "https://elearning.unimib.it/enrol/index.php?id=62130",
    active: false,
    anno: 1,
  },
  {
    name: "Advanced Machine Learning",
    link: "https://elearning.unimib.it/course/view.php?id=61031",
    active: false,
    anno: 2,
  },
  {
    name: "Applicazioni Web: progettazione e Sviluppo",
    link: "https://elearning.unimib.it/course/view.php?id=61034",
    active: false,
    anno: 2,
  },
  {
    name: "Architettura del Software",
    link: "https://elearning.unimib.it/course/view.php?id=61026",
    active: false,
    anno: 2,
  },
  {
    name: "Artificial Intelligence",
    link: "https://elearning.unimib.it/course/view.php?id=61030",
    active: false,
    anno: 2,
  },
  {
    name: "Causal Networks",
    link: "https://elearning.unimib.it/course/view.php?id=61037",
    anno: 2,
    active: false,
  },
  {
    name: "Cloud Computing",
    link: "https://elearning.unimib.it/course/view.php?id=61036",
    anno: 2,
    active: false,
  },
  {
    name: "Computer and Robot Vision",
    link: "https://elearning.unimib.it/course/view.php?id=61032",
    anno: 2,
    active: false,
  },
  {
    name: "Data Analytics",
    link: "https://elearning.unimib.it/course/view.php?id=61041",
    anno: 2,
    active: false,
  },
  {
    name: "Data and Computational Biology",
    link: "https://elearning.unimib.it/course/view.php?id=61042",
    anno: 2,
    active: false,
  },
  {
    name: "Evolution of Software Systems and Reverse Engineering",
    link: "https://elearning.unimib.it/course/view.php?id=61043",
    anno: 2,
    active: false,
  },
  {
    name: "Foundations of Game Design",
    link: "https://elearning.unimib.it/course/view.php?id=61038",
    anno: 2,
    active: false,
  },
  {
    name: "Gestione della Conoscenza",
    link: "https://elearning.unimib.it/course/view.php?id=61028",
    anno: 2,
    active: false,
  },
  {
    name: "Information Retrieval",
    link: "https://elearning.unimib.it/course/view.php?id=61033",
    anno: 2,
    active: false,
  },
  {
    name: "Laboratorio di Interaction Design",
    link: "https://elearning.unimib.it/course/view.php?id=61040",
    anno: 2,
    active: false,
  },
  {
    name: "Laboratorio di Progettazione",
    link: "https://elearning.unimib.it/course/view.php?id=61035",
    anno: 2,
    active: false,
  },
  {
    name: "Laboratorio Internet of Things",
    link: "https://elearning.unimib.it/course/view.php?id=61027",
    active: false,
    anno: 2,
  },
  {
    name: "Large Scale Data Management",
    link: "https://elearning.unimib.it/course/view.php?id=61046",
    active: false,
    anno: 2,
  },
  {
    name: "Large-Scale Graph Algorithms",
    link: "https://elearning.unimib.it/course/view.php?id=61045",
    active: false,
    anno: 2,
  },
  {
    name: "Self-Adaptive Systems",
    link: "https://elearning.unimib.it/course/view.php?id=61025",
    active: false,
    anno: 2,
  },
  {
    name: "Sicurezza Informatica",
    link: "https://elearning.unimib.it/course/view.php?id=61039",
    active: false,
    anno: 2,
  },
  {
    name: "Sistemi di Calcolo Parallelo",
    link: "https://elearning.unimib.it/course/view.php?id=61044",
    active: false,
    anno: 2,
  },
  {
    name: "Unconventional and Quantum Computing",
    link: "https://elearning.unimib.it/course/view.php?id=61047",
    active: false,
    anno: 2,
  },
  {
    name: "Virtual and Augmented Reality",
    link: "https://elearning.unimib.it/course/view.php?id=61048",
    active: false,
    anno: 2,
  },
  {
    name: "Visual Information Processing and Management",
    link: "https://elearning.unimib.it/course/view.php?id=61029",
    active: false,
    anno: 2,
  },
]; //.sort((a, b) => a.name.localeCompare(b.name)); // ordina alfabeticamente

export default function App() {
  const [corsiFirst, setCourses] = useState<Course[]>(corsi);
  const [showMenu, setShowMenu] = useState(false);
  const [tempCourses, setTempCourses] = useState<Course[]>(corsi);
  const [query, setQuery] = useState("");

  const [selectedYears, setSelectedYears] = useState<number[]>([1, 2]); // di default entrambi selezionati

  const toggleYear = (year: number) => {
    setSelectedYears((prev) => {
      if (prev.includes(year)) {
        if (prev.length === 1) return prev;
        return prev.filter((y) => y !== year);
      } else {
        return [...prev, year];
      }
    });
  };

  // Quando l’app si monta, carico i corsi salvati
  useEffect(() => {
    const saved = localStorage.getItem("savedCourses");
    if (saved) {
      const selectedCourses = JSON.parse(saved);
      setCourses((prev) =>
        prev.map((c) => ({
          ...c,
          active: selectedCourses.some(
            (sc: { name: string }) => sc.name === c.name
          ),
        }))
      );
    }
  }, []);

  // Quando apro il modale, creo una copia aggiornata di corsiFirst
  useEffect(() => {
    if (showMenu) {
      setTempCourses(corsiFirst);
    }
  }, [showMenu]);

  // Quando premo Salva, aggiorno sia corsiFirst che localStorage
  const saveCourses = () => {
    const selected = tempCourses.filter((c) => c.active);
    localStorage.setItem("savedCourses", JSON.stringify(selected));
    setCourses(tempCourses); // aggiorna la lista principale
    setShowMenu(false); // chiudi il modale
  };

  const toggleTempCourse = (courseName: string) => {
    setTempCourses((prev) =>
      prev.map((c) => (c.name === courseName ? { ...c, active: !c.active } : c))
    );
  };

  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />;

  const url = `https://gestioneorari.didattica.unimib.it/PortaleStudentiUnimib/index.php?view=easycourse&form-type=corso&include=corso&txtcurr=1+-+PERCORSO+COMUNE&anno=2025&scuola=AreaScientifica-Informatica&corso=F1802Q&anno2[]=GGG|1&date=${getToday()}&_lang=it&list=&week_grid_type=-1&ar_codes_=&ar_select_=&col_cells=0&empty_box=0&only_grid=0&highlighted_date=0&all_events=0&faculty_group=0#`;

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16">
      {/* Titolo */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-10">
        InfoLink
      </h1>

      {/* Bottoni corsi attivi */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10 w-full">
        {corsiFirst
          .filter((course) => course.active)
          .map((course) => (
            <a
              key={course.name}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 md:w-80 md:h-20 px-6 py-3 bg-blue-400 items-center text-center justify-center flex text-white rounded
                       hover:bg-blue-800 hover:scale-105 transform
                       transition duration-150 ease-in-out cursor-pointer shadow-lg
                       font-raleway font-semibold text-m uppercase"
            >
              {course.name}
            </a>
          ))}
      </div>

      {/* Bottoni principali (icone) */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 mb-10 w-full max-w-[1200px] mx-auto">
        <a
          href="https://s3w.si.unimib.it/auth/studente/HomePageStudente.do"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-200 w-50  rounded-lg p-4 hover:bg-gray-300 transition transform hover:scale-105"
        >
          <GraduationCapIcon size={32} color="green" className="mb-2" />
          <span className="font-semibold text-center">Segreteria Online</span>
        </a>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-200 w-50 rounded-lg p-4 hover:bg-gray-300 transition transform hover:scale-105"
        >
          <CalendarDotsIcon size={32} color="blue" className="mb-2" />
          <span className="font-semibold text-center">Calendario Lezioni</span>
        </a>

        <a
          href="https://gestioneorari.didattica.unimib.it/PortaleStudentiUnimib/index.php?view=easytest&form-type=et_cdl&include=et_cdl&et_er=1&scuola=AreaScientifica-Informatica&esami_cdl=F1801Q&anno2%5B%5D=1&datefrom=23-09-2025&dateto=11-04-2026&_lang=it&list=&week_grid_type=-1&ar_codes_=&ar_select_=&col_cells=0&empty_box=0&only_grid=0&highlighted_date=0&all_events=0#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-200  w-50   rounded-lg p-4 hover:bg-gray-300 transition transform hover:scale-105"
        >
          <CalendarDotsIcon size={32} color="red" className="mb-2" />
          <span className="font-semibold text-center">Calendario Esami</span>
        </a>

        <a
          href="https://esamionline.elearning.unimib.it/my/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-200 w-50  rounded-lg p-4 hover:bg-gray-300 transition transform hover:scale-105"
        >
          <DesktopIcon size={32} color="purple" className="mb-2" />
          <span className="font-semibold text-center">Esami Online</span>
        </a>

        <div
          onClick={() => {
            setTempCourses(corsiFirst);
            setShowMenu(true);
          }}
          className="flex flex-col items-center bg-gray-200 w-50  rounded-lg p-4 cursor-pointer hover:bg-gray-300 transition transform hover:scale-105"
        >
          <GearIcon size={40} className="mb-2" />
          <span className="font-semibold text-center">Imposta corsi</span>
        </div>
      </div>

      {/* Menu modale */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              key="modal"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-lg p-6 w-full sm:w-[90%] md:w-[80%] max-h-[80vh] overflow-x-auto"
            >
              {/* Titolo + barra di ricerca */}
              <div className="flex justify-between items-center mb-4 gap-4">
                {/* Toggle anni */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => toggleYear(1)}
                    className={`text-lg font-semibold px-4 py-2 rounded-lg w-full sm:w-auto ${
                      selectedYears.includes(1)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    1 anno
                  </button>

                  <button
                    onClick={() => toggleYear(2)}
                    className={`text-lg font-semibold px-4 py-2 rounded-lg w-full sm:w-auto ${
                      selectedYears.includes(2)
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    2 anno
                  </button>
                </div>

                <div className="flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden w-full sm:max-w-md">
                  <input
                    type="text"
                    placeholder="Cerca corso..."
                    className="w-full outline-none bg-white pl-4 text-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Lista corsi */}
              <div
                className="flex flex-col md:flex-row md:flex-wrap gap-2 
                max-h-[60vh] overflow-y-auto md:overflow-y-visible"
              >
                {tempCourses
                  .filter((course) => selectedYears.includes(course.anno))
                  .filter((course) =>
                    course.name.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((course) => (
                    <button
                      key={course.name}
                      onClick={() => toggleTempCourse(course.name)}
                      className={`px-4 py-2 rounded-lg cursor-pointer mb-10w-full md:w-auto ${
                        course.active
                          ? course.anno === 1
                            ? "bg-blue-500 text-white"
                            : "bg-emerald-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {course.name}
                    </button>
                  ))}
              </div>

              {/* Pulsanti azione fissi */}
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full p-4 flex justify-end gap-4 ">
              <button
                onClick={() => setShowMenu(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Annulla
              </button>
              <button
                onClick={saveCourses}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Salva
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
