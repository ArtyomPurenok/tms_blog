import React from "react";
import './AstronautsMainTwoPage.scss';

import {AstronautsTwoAllCardBox} from './AstronautsTwoAllCardBox';
import {Header} from '../../Header';
import {Footer} from '../../Footer';
import {PageTittle} from '../../components/PageTittle';


type DateServer = {
    img: string
    title: string
    date: string
}

const AstronautsTwoDataServer: DateServer[] = [
    {
        img: 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653264000&Signature=YjbTQV9RWPUZIW13A34eefBuGNw4iuApSqvbIkaW8eG0k-w5734tVddHd1me7wtRkfb521fOdi8sHF~lFdTLElM0PTVULDLVx9dUVyI6AvZimw-MO8VNpOa1NY~BMCgKTQ1baGw2JOEXfMnbKN0xBOP8BKGP8dsnsyA2JdTSMQ8GPxsUo2fZ3DK7HQpnIEcTumgi0JBFRcNN4BwaK2rL8ya3YayAx2GUzgP2oTxV9knX5QhZ36Wfop-2QaqOynfm1il8fjc13DF9ynm7tx-crjzDTz5F~nCvgIZrVXp-3HSIYZ0ETKj5rDxySKi7uDOib-QdDgEfDXPoSzPhT1c0og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/b2fd/4c97/c822fb6a29d26502bc04b46d80ea5543?Expires=1653264000&Signature=EPhcXNw3dUZKJxgBX5SNvksljDIEZc0Zq5d3QpBNda36y1iTowypDw5tCe8TBReRrWUymTZ1L~bIbvLI0jepb4132ZbSKAcOtkb4PQGoYK09YbE97TD0p0e57yiOFwXuHNOSsF-a4Bh2zZH07N~AhVWvLYrmT8YmKPmlqy-RWd3NeWWs1MDn6kpe7GBbKV4uau3rnuX9e-CXwjsQw1T8qjRZBqDlTklhZIkFr6AoEZZ-L79iy8vUr3QeJeHriHrySq3rGDOUcLMB4VsrgwJCyGqAi2eIxVyvapDAa41yBfNdRkQlvR5e~rO69FQJPte7AyxrQiW-rYUx~zfY9fT12w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/b2fd/4c97/c822fb6a29d26502bc04b46d80ea5543?Expires=1653264000&Signature=EPhcXNw3dUZKJxgBX5SNvksljDIEZc0Zq5d3QpBNda36y1iTowypDw5tCe8TBReRrWUymTZ1L~bIbvLI0jepb4132ZbSKAcOtkb4PQGoYK09YbE97TD0p0e57yiOFwXuHNOSsF-a4Bh2zZH07N~AhVWvLYrmT8YmKPmlqy-RWd3NeWWs1MDn6kpe7GBbKV4uau3rnuX9e-CXwjsQw1T8qjRZBqDlTklhZIkFr6AoEZZ-L79iy8vUr3QeJeHriHrySq3rGDOUcLMB4VsrgwJCyGqAi2eIxVyvapDAa41yBfNdRkQlvR5e~rO69FQJPte7AyxrQiW-rYUx~zfY9fT12w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/249a/554c/319c5036cb2bfaba5dc6816dd24aa8a8?Expires=1653264000&Signature=D3dyPzzt4nb-Rsg1JJMGh60MghbqbWKwm3o3NxVpaTCSYUAL9MOHu67~nbG5ZRQTD2iUd3f14sVJEoVHdFmExSALbB2LOPEJ6Jo0vPFhX6NtCQu-CylaAvEzbU7JsJnVYufgLNEA4DjPQ9VkD9IAtY-S2rjRHfsXhjYjbsYqH4MxVhhQSjgSWq7BXyMNl~Da9IcWxTLDUngH55qQUIv0pYrJKYJSiNPr3X8QDQ8PvK72d-YS6Z2jPQzA3Rwl1mwnBRq9F-vlv1CkWz2Mrwm5ndIQhzYd0T1E7aT3u485faTh9wf9l5mz4z8sjZnJV~xvELXrP4lije4Z~ZuymnOTsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/b2fd/4c97/c822fb6a29d26502bc04b46d80ea5543?Expires=1653264000&Signature=EPhcXNw3dUZKJxgBX5SNvksljDIEZc0Zq5d3QpBNda36y1iTowypDw5tCe8TBReRrWUymTZ1L~bIbvLI0jepb4132ZbSKAcOtkb4PQGoYK09YbE97TD0p0e57yiOFwXuHNOSsF-a4Bh2zZH07N~AhVWvLYrmT8YmKPmlqy-RWd3NeWWs1MDn6kpe7GBbKV4uau3rnuX9e-CXwjsQw1T8qjRZBqDlTklhZIkFr6AoEZZ-L79iy8vUr3QeJeHriHrySq3rGDOUcLMB4VsrgwJCyGqAi2eIxVyvapDAa41yBfNdRkQlvR5e~rO69FQJPte7AyxrQiW-rYUx~zfY9fT12w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },

    //smoll card
    {
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1653264000&Signature=YO74PqosjjoP9Cq6mDuVUdWzMMJZeegiE0pwjcL9n7NnkBprP-jVMpnoDAD2xGuHdCS12EkpGgzn-qD3-rJMCUWhdVeRDXg~LXil0xykwy3alPu3f3I9pDikIzzdqBnixSVThX2wt7DZBA22BuIOxCFTNifrJ4ggsC0klQYVghe3n8BuT3EwFJmzHz7qTLKJID9nKuf7Rb6CxlSczzrn7qpMDYywsEPcP-oK7U7753-~TPb6J2yeIpGrMhDWJYhbdBaWPCdWarnj0xqu2q~LgAL-QPnQaBnDvjW2i2comwyyiWmNoJHR9lVTcjMHhXMu3-G0WsDIg2uXTL0f4EhZ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1653264000&Signature=YO74PqosjjoP9Cq6mDuVUdWzMMJZeegiE0pwjcL9n7NnkBprP-jVMpnoDAD2xGuHdCS12EkpGgzn-qD3-rJMCUWhdVeRDXg~LXil0xykwy3alPu3f3I9pDikIzzdqBnixSVThX2wt7DZBA22BuIOxCFTNifrJ4ggsC0klQYVghe3n8BuT3EwFJmzHz7qTLKJID9nKuf7Rb6CxlSczzrn7qpMDYywsEPcP-oK7U7753-~TPb6J2yeIpGrMhDWJYhbdBaWPCdWarnj0xqu2q~LgAL-QPnQaBnDvjW2i2comwyyiWmNoJHR9lVTcjMHhXMu3-G0WsDIg2uXTL0f4EhZ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1653264000&Signature=YO74PqosjjoP9Cq6mDuVUdWzMMJZeegiE0pwjcL9n7NnkBprP-jVMpnoDAD2xGuHdCS12EkpGgzn-qD3-rJMCUWhdVeRDXg~LXil0xykwy3alPu3f3I9pDikIzzdqBnixSVThX2wt7DZBA22BuIOxCFTNifrJ4ggsC0klQYVghe3n8BuT3EwFJmzHz7qTLKJID9nKuf7Rb6CxlSczzrn7qpMDYywsEPcP-oK7U7753-~TPb6J2yeIpGrMhDWJYhbdBaWPCdWarnj0xqu2q~LgAL-QPnQaBnDvjW2i2comwyyiWmNoJHR9lVTcjMHhXMu3-G0WsDIg2uXTL0f4EhZ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1653264000&Signature=YO74PqosjjoP9Cq6mDuVUdWzMMJZeegiE0pwjcL9n7NnkBprP-jVMpnoDAD2xGuHdCS12EkpGgzn-qD3-rJMCUWhdVeRDXg~LXil0xykwy3alPu3f3I9pDikIzzdqBnixSVThX2wt7DZBA22BuIOxCFTNifrJ4ggsC0klQYVghe3n8BuT3EwFJmzHz7qTLKJID9nKuf7Rb6CxlSczzrn7qpMDYywsEPcP-oK7U7753-~TPb6J2yeIpGrMhDWJYhbdBaWPCdWarnj0xqu2q~LgAL-QPnQaBnDvjW2i2comwyyiWmNoJHR9lVTcjMHhXMu3-G0WsDIg2uXTL0f4EhZ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1653264000&Signature=YO74PqosjjoP9Cq6mDuVUdWzMMJZeegiE0pwjcL9n7NnkBprP-jVMpnoDAD2xGuHdCS12EkpGgzn-qD3-rJMCUWhdVeRDXg~LXil0xykwy3alPu3f3I9pDikIzzdqBnixSVThX2wt7DZBA22BuIOxCFTNifrJ4ggsC0klQYVghe3n8BuT3EwFJmzHz7qTLKJID9nKuf7Rb6CxlSczzrn7qpMDYywsEPcP-oK7U7753-~TPb6J2yeIpGrMhDWJYhbdBaWPCdWarnj0xqu2q~LgAL-QPnQaBnDvjW2i2comwyyiWmNoJHR9lVTcjMHhXMu3-G0WsDIg2uXTL0f4EhZ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1653264000&Signature=YO74PqosjjoP9Cq6mDuVUdWzMMJZeegiE0pwjcL9n7NnkBprP-jVMpnoDAD2xGuHdCS12EkpGgzn-qD3-rJMCUWhdVeRDXg~LXil0xykwy3alPu3f3I9pDikIzzdqBnixSVThX2wt7DZBA22BuIOxCFTNifrJ4ggsC0klQYVghe3n8BuT3EwFJmzHz7qTLKJID9nKuf7Rb6CxlSczzrn7qpMDYywsEPcP-oK7U7753-~TPb6J2yeIpGrMhDWJYhbdBaWPCdWarnj0xqu2q~LgAL-QPnQaBnDvjW2i2comwyyiWmNoJHR9lVTcjMHhXMu3-G0WsDIg2uXTL0f4EhZ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: 'April 20, 2021',
    },
];

export const DataServer = React.createContext(AstronautsTwoDataServer);
export const AstronautsMainTwoPage = () => {

    return <div className="astronauts-main-two-page">
        <DataServer.Provider value={AstronautsTwoDataServer}>
        <Header/>
        <PageTittle pageTitleTxt='Blog' pageTitleGeneralDiv='astronauts-main-two-page__page-tittle'/>
        <AstronautsTwoAllCardBox/>
        <Footer/>
        </DataServer.Provider>
    </div>
}