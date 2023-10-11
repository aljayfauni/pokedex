// pages/somepage.js
import axios from 'axios';
export async function getStaticProps() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
}

function indexPage({ data }) {
  return (
    <div>
      {data ? (
        <div>
          
		  <div className="container mx-auto px-4">
		  <h1 className="text-3xl font-bold text-amber-500 mt-10">Pokédex</h1>
		  <br/>
          <div className="pokemon-list flex flex-wrap space-y-10 ">
            {data.results.map((pokemon, index) => (
              <div key={index} className="pokemon-item   shadow-md bg-gray-100">
                <a href={`#`} >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemon.name}
                  />
                  
                </a>
				<div className="btn-name bg-gray-50">
					<button class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-stone-900 font-medium">
						{pokemon.name}
					</button>
				</div>
              </div>
            ))}
          </div>
        </div>
		</div>
      ) : (
        <p>Data not available</p>
      )}

      <style jsx>{`
        .pokemon-list {
        
          justify-content: space-between;
		  align-items:space-between;
		  margin-bottom:10px;
        }
		.btn-name{
			height:100px;
			width:100%;
			padding:20px;
		}

        .pokemon-item {
     
          padding: px;
          margin-bottom: 0px;
          text-align: center;
        }

        .pokemon-item img {
         	width: 100%;
			height: 200px !important;
			object-fit: contain;
			object-position: 50% 50%;
        }

        /* You can adjust the styles as needed */
      `}</style>
    </div>
  );
}

export default indexPage;
 