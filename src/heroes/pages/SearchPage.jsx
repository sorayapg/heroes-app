import { HeroCard } from "../components";


export const SearchPage = () => {
    return (

        <>
        
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form>
                        <input 
                            type="text" 
                            placeholder="Search a hero" 
                            className="form-control" 
                            name="searchText"
                            autoComplete="off"
                        />
                        <button className="btn btn-outline-info mt-1">
                            Serach
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    <div className="alert alert-info">
                        Search a hero 
                    </div>
                    <div className="alert alert-danger">
                        There's no <b>results</b> 
                    </div>
                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    )
}
