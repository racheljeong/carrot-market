import {useState} from "react"

//create hook and this will be react component.
//It returns function and state

interface UseMutationState {
    loading : boolean;
    data? : object;
    error? : object;
}

type UseMutationResult = [(data : any) => void, UseMutationState];

export default function useMutation(url : string): UseMutationResult {
   
//    const [loading, setLoading] = useState(false);
//    const [data, setData] = useState<undefined | any>(undefined);
//    const [error, setError] = useState<undefined | any>(undefined);

    const [state, setState] = useState({
        loading : false,
        data : undefined,
        error : undefined
    })
  
    //백엔드에서 data를 받는 func : useMutaion의 enter()
    function mutation(data:any) {
        setLoading(true);
        fetch(url, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data);
        }).then((response) => response.json())
          .then(setData)
          .catch(setError)
          .finally(() => setLoading(false));
        // .then((json) => setData(json));


    }


    return [mutation, {loading, data, error}];
}