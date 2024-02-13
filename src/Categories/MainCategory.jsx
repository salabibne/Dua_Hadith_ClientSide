import { useQuery } from "@tanstack/react-query";
import PublicApi from "../Hooks/PublicApi";

const MainCategory = () => {
    const PublicApi_url = PublicApi()
    const {isLoading,isError,error,data:mainCat=[]} = useQuery({
        queryKey: ['category'],
        queryFn: async ()=>{
            const res =await PublicApi_url.get("/allcategory")
            return res.data
           
        }

    })
    if(isLoading){
        return <span>Loading</span>
    }
    if(isError){
        return <span>Error : {error.message}</span>
    }
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
                {
                    mainCat.map((cat)=><button className="items-center justify-center" key={cat.key}>{cat.cat_name_en}</button>)
                }

            </div>
            
        </div>
    );
};

export default MainCategory;