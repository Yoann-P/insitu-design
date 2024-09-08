import { projects } from "@/data";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaMailBulk } from "react-icons/fa";

// const Solutions = () => {
//   return (
//     <div className="py-20">
//       <h3 className="heading text-blue-900">Notre Solution Compléte</h3>

//       <div className="relative">
//         {/* Spotlight traversant toute la largeur de la section */}
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="top-10 left-full h-[80vh] w-[50vw]"
//           fill="yellow"
//         />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 p-4 mt-10">
//         {projects.map(({ id, title, img }) => (
//           <div
//             key={id}
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full rounded-3xl border-2 border-blue-500 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${img})`,
//             }}
//           >
//             <div className="backdrop-blur-md hover:backdrop-blur-lg bg-white/10 p-4 rounded-lg text-white">
//               {title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Solutions;

const Solutions = () => {
  return (
    <div className="py-20" id="solution">
      <h2 className="heading text-blue-900 text-4xl font-bold">
        Notre Solution Complète : Des Produits « Clé en Main »
      </h2>

      <div className="relative">
        {/* Spotlight traversant toute la largeur de la section */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="yellow"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <section className="text-center mt-10">
        <p className="text-lg">
          <strong>InSitu Systems</strong> propose une{" "}
          <strong>solution complète</strong> pour la{" "}
          <em>supervision des systèmes d'eau</em>, qui ne requiert{" "}
          <strong>aucune compétence spécifique</strong>,{" "}
          <strong>aucune prestation extérieure</strong>, et{" "}
          <strong>aucun abonnement</strong>.
        </p>

        <h3 className="text-2xl font-semibold mt-8">
          Mise en service en 3 étapes simples :
        </h3>
        <ul className="text-left list-disc ml-6 mt-4 space-y-2">
          <li>
            <strong>Fixez :</strong> Supports de fixation inclus, notice
            explicative fournie.
          </li>
          <li>
            <strong>Raccordez :</strong> Repères visuels pour chaque borne,
            connexion sans outil grâce aux borniers <strong>Wago</strong>.
          </li>
          <li>
            <strong>Supervisez :</strong> Géolocalisation de l'installation,
            données visibles instantanément sur le tableau de bord.
          </li>
        </ul>

        <p className="mt-4">
          Certaines applications, comme le{" "}
          <strong>pilotage direct des pompes</strong>, peuvent nécessiter
          l'intervention d'une personne qualifiée.
        </p>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-blue-900">
          Nos standards adaptés aux collectivités :
        </h3>
        <p className="mt-4">
          <strong>InSitu Systems</strong> a développé{" "}
          <strong>5 standards</strong> pour répondre aux besoins des
          collectivités en matière de{" "}
          <em>supervision des infrastructures d'eau</em>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 p-4 mt-10">
          {projects.map(({ id, title, img }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full rounded-3xl border-2 border-blue-500 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="backdrop-blur-md hover:backdrop-blur-lg bg-white/10 p-4 rounded-lg text-white">
                <h4 className="text-xl font-bold">{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold">Applications :</h3>

        <div className="flex flex-col md:flex-row items-start mt-4 gap-8 md:gap-16">
          {/* Liste des applications */}
          <ul className="text-left list-disc ml-6 mt-4 space-y-2 flex-1">
            <li>
              <strong>Réservoir – Château d’eau :</strong> Surveillance du
              niveau de remplissage des réservoirs et châteaux d’eau.
            </li>
            <li>
              <strong>Forage – Captage :</strong> Supervision du niveau des
              ressources en eau des pompes de forage et captage.
            </li>
            <li>
              <strong>Relevage :</strong> Supervision d’un poste de relevage
              avec 1 à 3 pompes.
            </li>
            <li>
              <strong>Réseau – Surverse :</strong> Monitoring des réseaux d’eau
              et des points de surverse.
            </li>
            <li>
              <strong>Surpression :</strong> Supervision d’un poste de
              surpression de 1 à 3 pompes.
            </li>
          </ul>

          {/* Bouton Contact */}
          <div className="mt-3 flex justify-center md:justify-start md:mt-0">
            <a href="#contact">
              <MagicButton
                title="Contact"
                icon={<FaMailBulk />}
                position="right"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
