import React, {useEffect} from "react";
import './AstronautsMainPage.scss';
import { useDispatch, useSelector } from "react-redux";
import {addContent} from '../../redux/reducer/PostServer';
import { type Post} from '../../redux/reducer/PostServer';
import {featchData} from '../../thunkAction/AddPost';

import {BoxWithAstronautsCards} from './BoxWithAstronautsCards';
import {Header} from '../../Header';
import {Footer} from '../../Footer';


const postsFromServer: Array<Post> = [
    {
        id: 1,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        article: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1654473600&Signature=PfLqLj1lwVPCSCd9~DdXy5IKg~ulwpq5MmDkEVNZc1g8D8C6BjhXb3mpuslqkKrWI5ugvEr1qrkOTuGzlzjUHyO~Jgu2SRG-UFJLI32e~uq6M4BH7US84DpZUnUbm1TNYNGlkpt1lwP2s1kOeK0K76wE2xllGwPxzmxjeU4fM~RpHoqsOO~ZAGu-EA1tpsquo9rJqr-3VIp9Vbyn3ktH66GqRF8ZnTviG57UtHhN5MUYdEs0lAZkn3v7dFF2J7VExPJCxx8bJb-bjw7fdSak-MF~oiDUU8~6P2EcCMWP0Ew6ve1Fx94ZvXOjL~dnh7vd6hAgVPJN9K~xl1fktBXG7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'large',
        like: false,
        dislike: false,
        Bookmark: false,
    },



    {
        id: 2,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/b2fd/4c97/c822fb6a29d26502bc04b46d80ea5543?Expires=1654473600&Signature=bzRkow7QLW2pgxlYNZZRQ68IoWTBcj3n69IFskDL3ug-kM2-muMzVC7d5lokIMRhedPd~02mCEk5ee38-sFmXU3BB7uM9Xj0s6aXGAxtc3aD0~zmmtXAIoSpc0j0Ss~thZCB2QpH8Qe5xpFMu-48rWX4Gqn5oHxssPjKYaDchX6HO5LaCIkrzvsX-3iAc0e2gHoT8ci2DHZmXaDYqJHhfXGXnEhEbD2odwfJqRnKpUW2mXLcdDcykARBTJX1sTO8eQcH2qExm3RqkfKw01qVG2mB~vJC~cNzs211A3ECIOBSly8NbWhxBdhPLNExoSD5PKlonpFvk72h9PCPtA6IcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 3,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1654473600&Signature=RLWxVhFJ-Ld-l9k5GTTHBITzk2d1OmiX-51O~H42I6YtvY8ec8nYqCsGAOHEsW5Uf6AbPcHUIpUTL9oNDH2uUSw-EnD68tqB5mWjChWW61KuETfjiU0xbJMwGL~e3Fg0lsH5OfgTn1gsOjoiFa7SgzcxFp0hHzPNTDnFZ7alxyCG~Si-ulc-d19KpqOlbZhZYDZHPK5oK6oei8apSulhoTVhDffDWZzZHJXY5bifhxoWYiNOHjG5omO3CiNSqFLMt~Ot65pvBE0~~tqG7F-g9UUzqHcHt6~PbzDLSmKO8R0Pjhr4TlgmVVFJgAMeOpHG6Kl15qAqrTQdtFJq309gGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 4,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1654473600&Signature=PfLqLj1lwVPCSCd9~DdXy5IKg~ulwpq5MmDkEVNZc1g8D8C6BjhXb3mpuslqkKrWI5ugvEr1qrkOTuGzlzjUHyO~Jgu2SRG-UFJLI32e~uq6M4BH7US84DpZUnUbm1TNYNGlkpt1lwP2s1kOeK0K76wE2xllGwPxzmxjeU4fM~RpHoqsOO~ZAGu-EA1tpsquo9rJqr-3VIp9Vbyn3ktH66GqRF8ZnTviG57UtHhN5MUYdEs0lAZkn3v7dFF2J7VExPJCxx8bJb-bjw7fdSak-MF~oiDUU8~6P2EcCMWP0Ew6ve1Fx94ZvXOjL~dnh7vd6hAgVPJN9K~xl1fktBXG7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 5,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/249a/554c/319c5036cb2bfaba5dc6816dd24aa8a8?Expires=1654473600&Signature=XnKT69Flrm43kDQUxaU9z4UPl6jW1gXu-WqOcvyOjyJS~4W0RN129RoOHhUoFiDkmN70BZAsHyK7W5IkCYzD95EiqZuFPFZylNdXkzEImFIfbB15ahR0hYd-2IyEGZxPdCCBrfn8OGPNJB8~2RHaMQLacQUBO~HKmO-VKZuC2Tf39~J16FNFRocq60rTXBduQnHq6UV2n83Mzmk~0hma2~aKg8TZXe-JVZU7D4MGdKVNUfDTpSZQ97kYVwBqvRwFJ14VuKsnf8DgTazAYOImtrQe0V1liBKIv8UfJoH~qaxmk6lHuiqrfiE~ZKRM9pOsGScsHJsoNsdik2a8LcUqhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
        like: false,
        dislike: false,
        Bookmark: false,
    },


    
    {
        id: 6,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1654473600&Signature=Hp-FmFbn7tDxQvLKYR2pBQS-Eguzq520cgJbZdJONTI~kffG5T37jfXnR8Dks62h183c1zjtpA2Wv9rkymkzemUU9yeNEnkq2rqfskL4fcXkTNATo~fxBZPRTyOiG1uAjyHhFTa~4mj--yRXbKz1vqfN-w12jrZbLL8hk2aS09EMJj-b5LlxnZb57FdatnvdxXEmTeswPvJgdsaMTNH~2OaOOethaBI4p8CtiDJ8ORMbbnsN3iUpQpV4-EOVIQrkJAC3cDRgRF8dIIY93rCrjkT31zZigxkc1Za~Rks~d4FdjguK5RcfNWYCXP0hGKbqwvRpE~oMTD7QBMGCebmU9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 7,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/a9a9/de5e/ec223271556a57442ecbde15379cf0f3?Expires=1654473600&Signature=QHI3xS9dIiYT9wveCTKpjaGJPF9vSRsctIRJPiYxodS33dRn3y5tiSYQeJtymyvMAxtqald1SBuGW47XcgAWebfmn6vLUt7XTzoaSpoCiVa1QeNw7RoxT-M-8t6riuFsMMzYYhRf2qgGSvUNTLsz32r~ln9SqpQPEtWNiNCkf4mT3M9hvxnP8kLo3glPYkkViG5hxl54oUYFUaLncbvgoXb6N1o6p5ESTT23Bf1TEjwqQo-p3VKmOiseyV20vzn4QTCHGqNXCA99rMn2uBZi8st2eeemUiC~fnDN1fhUrFlhwE8gKn0YrMquh~VwWX1FRqvUvkF11hVXOFCsWOgZqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 8,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/fc23/1189/d2e26c765d02305471712d9df37b2d1b?Expires=1654473600&Signature=ga0zCBGAs4Zmi~MCqbVIkA74vWqbeS0mYrU4DDblBM5QDnayKYHP4F5hYn~vilrqLSjrIZEJ2jQq375e5gAOZlIa4z048QyH0-F5bzpCIjKwf8SkqsoY6Wlg98-UiBF~-aJOAjs5xdBpQujfpBA-iFGr7pWA8YzOmcDON9b0eZfgDRc0nUbZ0KNAdLTsJo45R4L44dkFz8mzJGBtsUioLlkBV5BZAnUlkqnD~n8V4INUJOWG-YaFRTQ6Ver~IdN6~4Z880PSF7ydd146S0j5x-rRM-NdVQzpJ14oReGf26pfyvW6oscH2e5YVZNNY2wTiFH0kcFZ18ypZHbp-NygBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 9,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/a9a9/de5e/ec223271556a57442ecbde15379cf0f3?Expires=1654473600&Signature=QHI3xS9dIiYT9wveCTKpjaGJPF9vSRsctIRJPiYxodS33dRn3y5tiSYQeJtymyvMAxtqald1SBuGW47XcgAWebfmn6vLUt7XTzoaSpoCiVa1QeNw7RoxT-M-8t6riuFsMMzYYhRf2qgGSvUNTLsz32r~ln9SqpQPEtWNiNCkf4mT3M9hvxnP8kLo3glPYkkViG5hxl54oUYFUaLncbvgoXb6N1o6p5ESTT23Bf1TEjwqQo-p3VKmOiseyV20vzn4QTCHGqNXCA99rMn2uBZi8st2eeemUiC~fnDN1fhUrFlhwE8gKn0YrMquh~VwWX1FRqvUvkF11hVXOFCsWOgZqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 10,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/fc23/1189/d2e26c765d02305471712d9df37b2d1b?Expires=1654473600&Signature=ga0zCBGAs4Zmi~MCqbVIkA74vWqbeS0mYrU4DDblBM5QDnayKYHP4F5hYn~vilrqLSjrIZEJ2jQq375e5gAOZlIa4z048QyH0-F5bzpCIjKwf8SkqsoY6Wlg98-UiBF~-aJOAjs5xdBpQujfpBA-iFGr7pWA8YzOmcDON9b0eZfgDRc0nUbZ0KNAdLTsJo45R4L44dkFz8mzJGBtsUioLlkBV5BZAnUlkqnD~n8V4INUJOWG-YaFRTQ6Ver~IdN6~4Z880PSF7ydd146S0j5x-rRM-NdVQzpJ14oReGf26pfyvW6oscH2e5YVZNNY2wTiFH0kcFZ18ypZHbp-NygBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
        like: false,
        dislike: false,
        Bookmark: false,
    },
    {
        id: 11,
        data: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1654473600&Signature=Hp-FmFbn7tDxQvLKYR2pBQS-Eguzq520cgJbZdJONTI~kffG5T37jfXnR8Dks62h183c1zjtpA2Wv9rkymkzemUU9yeNEnkq2rqfskL4fcXkTNATo~fxBZPRTyOiG1uAjyHhFTa~4mj--yRXbKz1vqfN-w12jrZbLL8hk2aS09EMJj-b5LlxnZb57FdatnvdxXEmTeswPvJgdsaMTNH~2OaOOethaBI4p8CtiDJ8ORMbbnsN3iUpQpV4-EOVIQrkJAC3cDRgRF8dIIY93rCrjkT31zZigxkc1Za~Rks~d4FdjguK5RcfNWYCXP0hGKbqwvRpE~oMTD7QBMGCebmU9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
        like: false,
        dislike: false,
        Bookmark: false,
    },
]


export const AstronautsMainPage = () => {
    const dataCards = useSelector((state: any) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(featchData());
    }, [])


    return <div className="astronauts-main-page">
    <Header/>
    <BoxWithAstronautsCards dataServer={dataCards}/>
    <Footer/>
    
    </div>
}