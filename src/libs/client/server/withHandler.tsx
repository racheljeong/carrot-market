//helper function
//Next.js에서 api route 만들때 꼭 export default 처리 필요
// == function을 return 해야함!!
//-> Next.js에서 api route를 만들 때는 function을 리턴해야함
//그러면 nextJs가 사용자가 url 호출할때 그 func를 실행하고 
//req, res를 전달해준다
//여기서 withHandler는 handler의 껍데기 역할을 한다.
//withHandler안에서 커스터마이징 한 func을 리턴한 func를 handler에서 가져다쓰는중

import { NextApiRequest, NextApiResponse } from "next"

export default function withHandler(method : "POST", fn:(req:NextApiRequest, res:NextApiResponse) => void){
//1.HTTP method, 2. handler funcion to excute



    return async function(req:NextApiRequest, res:NextApiResponse){
    //nextJS가 실행할 함수
        if (req.method !== method) {
            return res.status(405).end();
        }
        try {
            await fn(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    }
}