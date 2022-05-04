import React, {useState, useEffect} from 'react';
import './Astronauts.css';

import {Header} from '../Header'
import {Footer} from '../Footer'

import {LargePost} from '../Posts'
import {AveragePorst} from '../Posts'
import {LittlePost} from '../Posts'


const postsFromServer = [
    {
        id: 1,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        article: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1652659200&Signature=bvc7xr9OeCv9k7-4luKbJbAtxcLBlWM3NJ1IU08~6MW3vIvnM0vAUYvZ9U4N4TS0alAYdWzB9wn-pc60yJtwF9CrjRb5HLI2THKiIkBQ8fELC8h7lleysW52vWwHWEBE~SUrB~40ToKQk80oJRQ0YL7gtkR4d5KX3NyZJjxLOIWgJmwxcQl~T1HpD5QjlN8uegVkuEqrzOl27jFv6lvxK81DXRH7AmbnZtlWfJ1r6CZGc-M63pEXEqaTlqnwa61MmpX68hWPinC6c3khdLDB8D-E~D54Uk0h6EIzcZFqbv~lAdXed~kSdqQUP47fg5F3cgPKPZSmXriBJfJVJU~wWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'large',
    },



    {
        id: 2,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/b2fd/4c97/c822fb6a29d26502bc04b46d80ea5543?Expires=1652659200&Signature=dJSdiisjvBPF-TLU2IQfg9SpSfkVr3xU7gq57O1Obiev0M2aIUQqDU9ulq4Pjd--knQOoTrDcuX9uzuaGXS1RsCRWEOLHWkZ41rZCov~m2WE50Zg9hKxB5ka~aKAcE8PoBgiOj2XcomWCuxhecpfijfjl8QUTENB8IdwNU52p2ny5KaPxnMKf0xKEF27FLbtYuGLsXBsgm6MZyxT9l~W1qvb4cpE0jZqYC2eEqxBg3n7~MYXzG3Amseu-mJHA4ryAs8OMkECgBMUKjCFpYSnQ20RBtlyfVZft-U2DTx26~3rg~RHxy74BYKk~2PSYgLzQpPMdh6GCYJGifl7UUoWPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
    },
    {
        id: 2,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1652659200&Signature=JzgR8iPDGOrcRnXYuQJWaoMee3kfCc2xIn3ZWJ8JkUrCEIAPybYtQSkRucNaRvTx66NMOdxhaOxKdYViOEp0BnKQ~PxnhtyYqwul26rZA6eA8Ec9jS1zfVLZYjWY95rnkaaTe8KjW4HtAUeypLTFAQOEREjd3xdw56h0SgKT2kb~9KWEj-fHrBTVKUAx0PBzqwys3Rnc0D2nyxUnGAGIwjfaQGhrukaMVEnzavGXtbs7Ai0NirKkEXkaRwYYd1EDPpuMBAp7EQkg~NEf-ZCdMqK4I3CptnIidbyP-TIM6NsXhFVFwnNPhSWYoVvlI4D75LJ0rPxDdhNOQb-Qtf0kTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
    },
    {
        id: 2,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1652659200&Signature=bvc7xr9OeCv9k7-4luKbJbAtxcLBlWM3NJ1IU08~6MW3vIvnM0vAUYvZ9U4N4TS0alAYdWzB9wn-pc60yJtwF9CrjRb5HLI2THKiIkBQ8fELC8h7lleysW52vWwHWEBE~SUrB~40ToKQk80oJRQ0YL7gtkR4d5KX3NyZJjxLOIWgJmwxcQl~T1HpD5QjlN8uegVkuEqrzOl27jFv6lvxK81DXRH7AmbnZtlWfJ1r6CZGc-M63pEXEqaTlqnwa61MmpX68hWPinC6c3khdLDB8D-E~D54Uk0h6EIzcZFqbv~lAdXed~kSdqQUP47fg5F3cgPKPZSmXriBJfJVJU~wWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
    },
    {
        id: 2,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/249a/554c/319c5036cb2bfaba5dc6816dd24aa8a8?Expires=1652659200&Signature=Zs8RLm~D6yeJ3oh6sGjEOulshNJ-HXkrxsUtFP20XAL4u91rRkKu97uFyl4XcB33oX9ic2-YVOXJsZDOOq4~fNi0BX1Ur-Sxn6h304CexSw~Fl98KQ5Dh38GvdQAvfAYNDHnCUU4rl5d3Qrvq0umfIDg2eZu0TqAAzYpFPnBB63yNwSckWjBTcWLDfGCKWyIXUImXTrYcgilSVbhT-r29MfBLkkfgbluw8Ii1dUAkYZqgHFLoTo89qOoOEZ4pDUdLB0ZmM6bZ5b2TXK1BXmrY~tpXySW0CrgCMp1u3zd3h8AmU1xohygqiuWfiMq5i3DLF2hheWnh1OSiAnsI~-F9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'average',
    },





    {
        id: 3,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1652659200&Signature=eW91xBrG2p2u0HDiezWUjmrmAwr4p1ue-A4a7bgboX-IdBPmXr60wR975FlhrpqjOzecDbLHCxTVjQq5xOr3RYfpBcucs5OhF2hwTmjHu59-RVFTq0URROV6NTwYutVbReHdFCDQCPSTHE3kyMZuEYwEO5r8Xqz1b1G4jw7xsKQTf7FxFm4R4zUqsiW9Qg3fkN1KinF6PDDR0PYsLlQPE9DqYuqPLvEMl98WhyB5dzDCDXDQ3j5l-TracC6FuxAdEXDqMBzzFjBPBg2yxEugZ9~9TVhbMtzYSN9hSwWb3redNaBrbWQucVNpo9gBdD30W8-o3EHCJaCq-Qe~ybBiZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
    },
    {
        id: 3,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/a9a9/de5e/ec223271556a57442ecbde15379cf0f3?Expires=1652659200&Signature=KjBgEBx6zJFQdbFvXO1~KruI42FV91FHS9EzN15zXF6Q4dI3-CDmAqOxggRxOz9OP2mZVHXxThJrfRinv2ITzD3RGpQnSGnCtmyFDdHyql49x7fN1spx5OkaS58mqm~a0GWHPGEDhLh0Ol2QDAchAgvhjR5sD7hVvJcaB~TJOoTQe9EHKGDLiDxY5qz3S3MbpyN4haowosL94WdiOC5R5PcFAcx9u-F4rEmau~vHjD9ML1UeBe3q96yRkLbXEt8Lsz5qaWsb9yKEU36bVYXNMlUw-aj38eodzsTvNPuCUC-9IWeBLK5yRyt6KtBUE2DWn5CfDeMV~Gf4KLIaI-3fNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
    },
    {
        id: 3,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/fc23/1189/d2e26c765d02305471712d9df37b2d1b?Expires=1652659200&Signature=X9u8SOauDJrNgevBvVeR3-cbvEiALaqs1Grxqvuiw8506s-p4ijt1zvjpptOxyd98rhgpcPoVEk3F7N-2HQVECYaYU9ut8RBq1gOEy8LkykyeOLRcei2109EG1ZugIFaLKzonqVU5GxOf30WmFfN6JqFfEH0UmH-B83Hh-6dZjgRjLGLGO-he8yNIqTKwTzxCjco4KniHyXnWYoiL5XvcHXA9Cvz2mL8I-h0OwRk947-4jAUPgHVx~kQAmimWzvrTXL6v~vF3tmMXStLWJV~1nqzg9VuFZc4ML9nVXzCuRczv88-kN-OMpEWja1xfuCCpBJmJjzrFi2X8L8xTGSOjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
    },
    {
        id: 3,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/a9a9/de5e/ec223271556a57442ecbde15379cf0f3?Expires=1652659200&Signature=KjBgEBx6zJFQdbFvXO1~KruI42FV91FHS9EzN15zXF6Q4dI3-CDmAqOxggRxOz9OP2mZVHXxThJrfRinv2ITzD3RGpQnSGnCtmyFDdHyql49x7fN1spx5OkaS58mqm~a0GWHPGEDhLh0Ol2QDAchAgvhjR5sD7hVvJcaB~TJOoTQe9EHKGDLiDxY5qz3S3MbpyN4haowosL94WdiOC5R5PcFAcx9u-F4rEmau~vHjD9ML1UeBe3q96yRkLbXEt8Lsz5qaWsb9yKEU36bVYXNMlUw-aj38eodzsTvNPuCUC-9IWeBLK5yRyt6KtBUE2DWn5CfDeMV~Gf4KLIaI-3fNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
    },
    {
        id: 3,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/fc23/1189/d2e26c765d02305471712d9df37b2d1b?Expires=1652659200&Signature=X9u8SOauDJrNgevBvVeR3-cbvEiALaqs1Grxqvuiw8506s-p4ijt1zvjpptOxyd98rhgpcPoVEk3F7N-2HQVECYaYU9ut8RBq1gOEy8LkykyeOLRcei2109EG1ZugIFaLKzonqVU5GxOf30WmFfN6JqFfEH0UmH-B83Hh-6dZjgRjLGLGO-he8yNIqTKwTzxCjco4KniHyXnWYoiL5XvcHXA9Cvz2mL8I-h0OwRk947-4jAUPgHVx~kQAmimWzvrTXL6v~vF3tmMXStLWJV~1nqzg9VuFZc4ML9nVXzCuRczv88-kN-OMpEWja1xfuCCpBJmJjzrFi2X8L8xTGSOjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
    },
    {
        id: 3,
        p: 'April 20, 2021',
        h1: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        img: 'https://s3-alpha-sig.figma.com/img/bbf5/ad70/350db8a9bc2c0a3f7414677dd4db5ac7?Expires=1652659200&Signature=eW91xBrG2p2u0HDiezWUjmrmAwr4p1ue-A4a7bgboX-IdBPmXr60wR975FlhrpqjOzecDbLHCxTVjQq5xOr3RYfpBcucs5OhF2hwTmjHu59-RVFTq0URROV6NTwYutVbReHdFCDQCPSTHE3kyMZuEYwEO5r8Xqz1b1G4jw7xsKQTf7FxFm4R4zUqsiW9Qg3fkN1KinF6PDDR0PYsLlQPE9DqYuqPLvEMl98WhyB5dzDCDXDQ3j5l-TracC6FuxAdEXDqMBzzFjBPBg2yxEugZ9~9TVhbMtzYSN9hSwWb3redNaBrbWQucVNpo9gBdD30W8-o3EHCJaCq-Qe~ybBiZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'little',
    },
]

export const AstranautRootFile = (() => {

const BigPosts = postsFromServer.map((el) => {
    if(el.id === 1) {
        return <LargePost p={el.p} h1={el.h1} img={el.img} article={el.article}/>
    }
    if(el.id === 2) {
       return <AveragePorst p={el.p} h1={el.h1} img={el.img}/>
    }
})

const SmallPosts = postsFromServer.map((el) => {
    if(el.id === 3) {
        return <LittlePost p={el.p} h1={el.h1} img={el.img}/>
    }
})
// console.log(asd)

    return  <div className='mainDivAstronautPage'>

        <div><Header/></div>

        <div className='mainHeaderPosts'><h1>Blog</h1></div>

        <div className='generalDivRootAssemblyAstronauts'>
          <div className='postDivLeft'>
              {BigPosts}
          </div>

          <div className='postDivRight'>
              {SmallPosts}
          </div>
        </div>


        <div><Footer/></div>

        </div>


})