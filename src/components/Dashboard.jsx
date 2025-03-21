import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";

const Dashboard = ({assets, searchTerm, setSearchTerm}) =>{
    return (
        <main>
            <h2>Bem-vindo ao Drive IA</h2>
            <input className='main-search' placeholder='Busque no Drive' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className='uploads-container'>
                {assets?.map(asset => asset.resource_type == 'image' && <ImageCard key={asset.asset_id} asset={asset}/> || <VideoCard key={asset.asset_id} asset={asset}/>
            )}
            </div>
        </main>
    )

}
export default Dashboard;