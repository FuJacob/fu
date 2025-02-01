import { motion } from "framer-motion";
import experiences from "../../../data/experience";
import GrayMessage from "../GrayMessage";
const ExperiencesMessages = () => {
  return (
    <>
      {experiences.map((exp, index) => (
        <GrayMessage>
            {/* Experience Card */}
            <div className="bg-white p-4 rounded-lg hover:scale-105 transform transition-transform duration-500">
              <h3 className="text-lg font-semibold text-gray-800">
                {exp.startDate} - {exp.endDate}
              </h3>
              <p className="text-blue-600 text-2xl font-bold mt-1">{exp.intro}</p>
              <p className="text-lsecondary italic">{exp.outro}</p>

              <ul className="list-disc marker:iblue pl-5 mt-2 text-secondary">

                  {exp.me.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>

        </GrayMessage>
      ))}
    </>
  );
};

export default ExperiencesMessages;
