import React, { useRef, useState } from "react"
import './AddPostPage.scss'
import { useDispatch, useSelector } from "react-redux"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { PageTittle } from "../../components/PageTittle"
import { AddPostFetch } from "../../thunkAction/AddPostFetch"
import { customFetch } from "../../thunkAction/CustomFeatch"



export const AddPostPage = () => {
    const formRef: any = useRef(null);
    const dataTokens = useSelector((state: any) => state.tokens.tokens);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [lessonNum, setLessonNum] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    const onTitleChange = (event: React.ChangeEvent<any>) => {
        setTitle(event.target.value);
      };
      const onLessonNumChange = (event: React.ChangeEvent<any>) => {
        setLessonNum(event.target.value);
      };
      const onImageChange = (event: React.ChangeEvent<any>) => {
        setImage(event.target.value);
      };
      const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
      };


      const CreatePost = (event: any) => {
          event.preventDefault();
          const formData: any = new FormData(formRef.current);
          const dataForFetch = {
            access: dataTokens.access,
            refresh: dataTokens.refresh,
            formRef: formData,
            user: {
                email: 'artempurya@gmail.com',
                password: 'art99101',
            }
          }
          
          
          dispatch(customFetch(dataForFetch))
           .then(AddPostFetch(dataForFetch))

      }
    

    return <div className="add-post">

            <PageTittle pageTitleComeHome='Home' pageTitleTxt='Add Post'/>   

                <form className="add-post-center-div" ref={formRef}>
                <Input name="title" value={title} onChange={onTitleChange} inputName='Title *' placeholder='Your Title' className='add-post-center-div__input-title' generalDiv='add-post-center-div__input-title-div'/>
                <Input inputName='URL' placeholder='Your URL' className='add-post-center-div__input-url' generalDiv='add-post-center-div__input-url-div'/>
                <Input name="lesson_num" value={lessonNum} onChange={onLessonNumChange} inputName='Lesson Num * (integer)' placeholder='Enter lesson number' className='add-post-center-div__input-lessonNum' generalDiv='add-post-center-div__input-lessonNum-div'/>
                <Input name="image" value={image} onChange={onImageChange} type="file" inputName='Image *' placeholder='Your Image' className='add-post-center-div__input-image' generalDiv='add-post-center-div__input-image-div'/>

                <div className="add-post-center-div__textarea">
                    <p>Description</p>
                    <textarea className="add-post-center-div__textarea-description" cols={30} rows={10} placeholder='Add your text'></textarea>
                </div>

                <div className="add-post-center-div__textarea">
                    <p>Text *</p>
                    <textarea name="text" value={text} onChange={onTextChange} className="add-post-center-div__textarea-text" cols={30} rows={10} placeholder='Add your text'></textarea>
                </div>
                <Button onClick={CreatePost} className="add-post-center-div__btn" txt='Add Post'/>
                </form>
                

    </div>
}