import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import dice from '../public/dice.png'
export default function Home({data}) {

  const [expanded, setexpanded] = useState(false)
  let meal = data.meals[0]


  const getIngredients = (meal) =>{
    var allIngredients = []
    // filtering ingredients and putting them in a list
    allIngredients.push(meal.strMeasure1 + " " +meal.strIngredient1)
    allIngredients.push(meal.strMeasure2 + " " +meal.strIngredient2) 
    allIngredients.push(meal.strMeasure3 + " " +meal.strIngredient3) 
    allIngredients.push(meal.strMeasure4 + " " +meal.strIngredient4) 
    allIngredients.push(meal.strMeasure5 + " " +meal.strIngredient5) 
    allIngredients.push(meal.strMeasure6 + " " +meal.strIngredient6)
    allIngredients.push(meal.strMeasure7 + " " +meal.strIngredient7)
    allIngredients.push(meal.strMeasure8 + " " +meal.strIngredient8)
    allIngredients.push(meal.strMeasure9 + " " +meal.strIngredient9)
    allIngredients.push(meal.strMeasure10 + " " +meal.strIngredient10) 
    allIngredients.push(meal.strMeasure11 + " " +meal.strIngredient11) 
    allIngredients.push(meal.strMeasure12 + " " +meal.strIngredient12) 
    allIngredients.push(meal.strMeasure13 + " " +meal.strIngredient13)
    allIngredients.push(meal.strMeasure14 + " " +meal.strIngredient14)
    allIngredients.push(meal.strMeasure15 + " " +meal.strIngredient15)
    allIngredients.push(meal.strMeasure16 + " " +meal.strIngredient16)
    allIngredients.push(meal.strMeasure17 + " " +meal.strIngredient17)
    allIngredients.push(meal.strMeasure18 + " " +meal.strIngredient18)
    allIngredients.push(meal.strMeasure19 + " " +meal.strIngredient19)
    allIngredients.push(meal.strMeasure20 + " " +meal.strIngredient20)
    
    allIngredients = allIngredients.filter(e => e != " " && e != "  " && e.indexOf("null") == -1)

    return allIngredients
  }


  const cardBody = (meal) =>{
    return (
      <div className="pb-8">
          
        <div>
          <h3 className="text-xl font-bold py-4">Ingredients</h3>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
            {getIngredients(meal).map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
        <h3 className="text-xl font-bold py-4">Instructions</h3>

        <ol className="list-decimal flex flex-col gap-4 list-inside">
          {meal.strInstructions.split('.').filter(i => i != '').map(item => 

          <li key={item}>{item}</li>
          )}
        </ol>
        
      </div>
    )
  }

  const youtubeBtn = () => {
    if (meal.strYoutube)  {
      return (
        <button id="btn" style={{display:expanded? 'grid' : 'none'}} className="bg-secondary text-lg font-bold py-1 px-4 flex-grow  grid place-content-center rounded-full border-2 border-black shadow-black drop-shadow-hard active:drop-shadow-none active:translate-x-1 active:translate-y-1 transition-all">
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <p> Watch Tutorial </p>
          </a>
        </button >
      )
    }
  }
  const router = useRouter()

  const refresh = ()=>{
    router.replace(router.asPath)
  }

  const handleClick = ()=>{
    const vis = !expanded
    getIngredients(meal)
    setexpanded(vis)
    document.getElementById('body').style.display = vis? 'block' : 'none'
    document.getElementById('arrow').style.rotate = vis? '180deg' : '0deg'
  }
  return (
    <div className="bg-primary">
      <Head>
        <title>Munchees - What´s for dinner?</title>
        <meta name="description" content="Simple meal randomizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-primary min-h-[100dvh] flex flex-col gap-20 lg:justify-between" >
        <h1 className="text-center text-accent italic font-black  text-5xl lg:text-8xl p-10 ">MUNCHEES</h1>
        <main className="flex flex-col gap-4 lg:w-1/2 m-2 lg:m-auto">
         <div className="border-2 border-black  bg-accent shadow-black drop-shadow-hard rounded-xl p-12 pb-4 mb-40">
            <div  className="flex flex-col gap-4">
              <h3 className="text-xl lg:text-3xl font-bold" >{meal.strMeal}</h3>
              <div className=" relative flex aspect-square max-h-[50dvh]">
                <img src={meal.strMealThumb} className="rounded-xl border-2 w-full  object-cover border-black shadow-black drop-shadow-hard"/>
                <div className="absolute right-0 -translate-y-8 ">
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-end gap-2 flex-col-reverse lg:flex-row">
                {youtubeBtn()}
                <button title="click to show recipe" onClick={handleClick} className="flex ml-auto  w-full justify-center font-bold items-center hover:cursor-pointer gap-2 rounded-full py-1 pl-4 pr-2 hover:pr-4 bg-secondary border-2 border-black drop-shadow-hard text-lg lg:w-fit lg:text-[0px] hover:text-lg transition-all">
                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                  <p className="min-w-0 min-h-0">{expanded? "Hide recipe" : "Show recipe"}</p>
                </button>
              </div>
            </div>
            <div id="body" className="pt-4 transition-all" style={{display:'none'}}>
              {cardBody(meal)}
            </div>
          </div>

          
        </main>
        <button onClick={refresh} title="Roll the dice" className="fixed bottom-4 right-4 active:rotate-[360deg] delay-rotate-100 hover:drop-shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:drop-shadow-none w-fit bg-secondary grid place-content-center p-4 rounded-full border-2 border-black shadow-black drop-shadow-hard">
        <Image src={dice} width={48} height={48}/>
      </button>

        <footer className="fixed bottom-4 left-4 font-bold" >
            <a href="https://github.com/Andreas-Espelund" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center hover:cursor-pointer gap-2 rounded-full w-fit py-1 pl-4 pr-2 hover:pr-4 bg-accent border-2 border-black drop-shadow-hard text-[0px] hover:text-lg transition-all"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
              Made by Andreas Espelund 
            </a>
        </footer>
      </div>
      
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const data = await res.json()
  return { props: {data}}
}