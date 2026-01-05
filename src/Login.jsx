import Acceuil from "./Acceuille";

const Login=()=>{
  
  return(
    <div>

      <Acceuil/>
      <div className=" bg-gray-150 p-6 rounded-lg shadow-md max-w-sm mx-auto m-15">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-3">
            <img src="authentification.jpg" alt="authentification" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Authentification</h2>
          <p className="text-sm text-gray-600 text-center mt-1">entrez votre matricule etudiant pour acceder au vote</p>
          </div>
          <input type="text" placeholder="Entrez Votre Matricule" className="bg-gray-200 rounded-md border-gray-200 w-full p-3 focus: ring-2 focus:outline-none hover:bg-gray-100 mb-4" />
          <input type="text" placeholder="Entrez Votre login" className="bg-gray-200 rounded-md border-gray-200 w-full p-3 focus: ring-2 focus:outline-none hover:bg-gray-100 mb-4" />
          <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out">Valide Votre Matricule</button>
          <p className="text-xs text-gray-500 text-center mt-4">votre matricule garantit l'unicite  de votre vote</p>
        
      </div>
      <div className="bg-yellow-50 p-2 rounded-lg shadow-md max-w-sm mx-auto m-15">
        <p className="text-gray-700 text-sm"> 🏆le candidat en tete est:</p>
      </div>
      <h2 className="text-center font-bold">Les Candidats</h2>
      <p className="text-center text-gray-500 font-medium mb-5">Decouvre les programmes des differentes listes et vote pour celle qui<br></br> represente le mieux vos valeurs</p>
    
      <div>
        <h2 className="text-center font-bold">Regle Du Vote</h2>
        <ul className="text-center text-gray-500 font-medium text-base list-disc list-inside  ">
          <li>un seul vote par matricule etudiant</li>
          <li>le vote est definitif et ne peut etre modifier</li>
          <li>les resultats sont mis a jour en temps reel</li>
          <li>seuls les etudiants inscrits peuvent voter</li>
        </ul>
        
      </div> 
    </div>     
  )
}
export default Login;