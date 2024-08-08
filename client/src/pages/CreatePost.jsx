import { Button, FileInput, Select, TextInput } from "flowbite-react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function CreatePost() {
  return (
    <div className="min-h-screen mx-auto max-w-3xl">
        <h1 className="text-center font-bold my-7">Create a POST</h1>
        <form className="flex flex-col gap-5">
            <TextInput type="text" placeholder="Title" required id="title"/>

            <Select>
                <option value="uncategorized">Select a Category</option>
                <option value="javascript">Javascript</option>
                <option value="react">React</option>
                <option value="Nodejs">NodeJS</option>
            </Select>

            <div className="flex justify-between items-center border-4 rounded border-teal-500 border-dotted p-3">
                <FileInput type="file" accept="image/*"/>
                <Button type="button" gradientDuoTone="purpleToBlue" outline>Upload Image</Button>
            </div>

            <ReactQuill theme="snow" className="h-52 mb-12" />
            <Button type="submit" gradientDuoTone='purpleToPink'>Publish</Button>
        </form>
    </div>
  )
}
