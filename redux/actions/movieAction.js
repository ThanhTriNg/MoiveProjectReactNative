export const GETALL_MOVIES = "GETALL_MOVIES";
export const CREATE_MOVIE = "CREATE_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE"



// GETALL
export const getAllMovies=(movies) => {
    return {
        type : GETALL_MOVIES,
        payload : movies,
    }
}
export const fetchAllMovies = ()=> {
    return (dispatch)  =>{
        // Bước 1 : gọi API
        const getData=async() => {
            const movies = await fetch("http://localhost:5555/api/movies");
            const data = await movies.json();
            console.log(data);

            // Bước 2 : gọi Action - redux phía trên vô action thunk
            dispatch(getAllMovies(data));
        }
        getData();
    }
}


// Add Movie 
export const createMovie=(movie) => {
    return{
        type : CREATE_MOVIE,
        payload : movie,
    };
};

export const postMovie = (movie) => {
    console.log('movie',movie);
    return(dispatch)=> {
        const postData = async() => {
            try{
                await fetch("http://localhost:5555/api/movies",
                {
                method : "POST",
                headers : {Accept : "application/json","Content-Type" : "application/json"},
                body : JSON.stringify(movie),
                }).then(res => {
                    console.log(res);
                });
            }catch(error){
                console.log(error);
            }
        };
        postData();
        dispatch(createMovie(movie));
    };
};

// Update movie
export const updateMovie = (state) => {
    return {
        type: UPDATE_MOVIE,
        payload: {
            state: state
        }
    };
}

export const UpdateFilm = (payload) => {
    return(dispatch)=>{
        const postUpdate = async() => {
            try{
                await fetch("http://localhost:5555/api/movies",
                {
                method : "POST",
                headers : {Accept : "application/json","Content-Type" : "application/json"},
                body : JSON.stringify(payload),
                }).then(res => {
                    console.log(res);
                });
            }catch(error){
                console.log(error);
            }
        };
       
        postUpdate();    
    };
};