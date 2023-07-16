import { NextPage } from "next";
import { La_Belle_Aurore } from "next/font/google";
import { useState } from "react";

interface Props {}

const Home: NextPage<Props> = {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File>();

    return(<div className="max-w-4xl mx-auto p-20 space-y-6">
    <label>
    <input type='file' hiden />
    <div className="w-40 aspect-video rounded flex items-center justify-center boder-2 border-dashed cursor-pointer">{selectedImage ? (
        <img src{selectedImage} alt=""/>
    ) : (
        <span>select Image</span>
    )}
    </div>
    </label>
    </div>);
};

export default Home;