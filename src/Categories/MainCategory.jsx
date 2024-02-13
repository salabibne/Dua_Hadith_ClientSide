import PublicApi from "../Hooks/PublicApi";

const MainCategory = () => {
    const PublicApi_url = PublicApi()
    return (
        <div className="w-[240px] fixed min-h-screen border rounded-lg">
            <div>
                <h1 style={{backgroundColor:'rgb(31, 164, 91)'}} className="text-white font-bold text-center p-2 border rounded-t-lg ">Categories</h1>
            </div>
            <div>
                <form>
                    <input className="p-2  rounded mt-2 hover:border-green-800 border-2 w-full" type="text" placeholder="Search Categories"></input>
               
                </form>
            </div>
            <div>
                {/* load categories */}
                
            </div>
            
        </div>
    );
};

export default MainCategory;