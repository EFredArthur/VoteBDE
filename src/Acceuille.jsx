export default function Acceuil(){

    return <section className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div>
        <span className="text-center  border-2 border-indigo-500 p-2 m-5 rounded-2xl inline-block bg-indigo-500">
          <p>✅ elections 2024-2025</p>
        </span>
        </div>
      
      <h2 className="text-4xl text-center font-bold">Bureau des Etudiants <br></br><span className="text-yellow-400">Votez pour votre avenir</span></h2>
      <p className="text-center m-5">participez aux elections du bureau des etudiants. chaque vote compte<br></br> pour construire le campus de demain</p>
      <div className="flex justify-center gap-10 w-full max-w-4xl bg-in rounded-2xl   mt-10">
        <div className="flex flex-col items-center text-center min-w-[120px]">
          <img src="./utilisateur.jpg" alt="icone vote" className=" w-16 h-16 rounded-full bg-gray-100 p-2 shadow object-cover " />
          <div className="text-center">
          <p className="font-bold text-xl">N</p>
          <p className="text-sm text-gray-300"> vote exprimes</p>
        
          </div>
        </div>
        <div className="flex flex-col items-center text-center min-w-[120px]">
          <img src="./client.jpg" alt="candidat" className="w-16 h-16 rounded-full bg-gray-100 p-2 shadow object-cover " />
          <div className="text-center">
            <p className="font-bold text-xl">N</p>
            <p className="text-sm text-gray-300">candidats</p>

          </div>
        </div>
        <div className="flex flex-col items-center text-center min-w-[120px]">
          <img src="./securite.jpg" alt="securite" className="w-16 h-16 rounded-full bg-gray-100 p-2 shadow object-cover "/>
          <div className="text-center">
            <p className="font-bold text-xl">100%</p>
            <p className="text-sm text-gray-300">securise</p>

          </div>
        </div>          
      </div>
      
      </section>
}