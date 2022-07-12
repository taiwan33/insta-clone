import { ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { UploadImg } from '../assets';
import { storage } from '../configure';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
    const [files, setFiles] = useState(null);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ))
        }
    })

    const clickHandler = () => {
        if (files == null) return;
        const imageRef = ref(storage, `picture/${files.name}`);
        uploadBytes(imageRef, files).then(() => {
            alert('uploaded pic');
        })
    }
    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} alt="" />
            </div>
        </div>
    ))

    return (
        <div className=' py-[18%] text-center items-center space-y-5'>
            <div {...getRootProps()}>
                <input type='file' {...getInputProps()} onChange={(e) => { setFiles(e.target.files[0]) }} />
                <div className='flex items-center justify-center relative'>
                    <UploadImg />
                </div>
            </div>

            <div className='text-2xl text-gray-800' >
                Drag photos and videos here
            </div>
            <div>{images}</div>
            <button onClick={clickHandler}>Submit</button>

            <div className='flex justify-center items-center space-y-6'>
                <div>
                    {files && <div>{files.name}</div>}
                </div>
            </div>
        </div>
    )
}

export default Upload