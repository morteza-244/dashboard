import fileUploader from "@/assets/icons/file-upload.svg";
import noImage from "@/assets/icons/gallery-add.svg";
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

interface FileUploaderProps {
  fieldChange: (file: File[]) => void;
  setFileUrl: (value: string) => void;
  fileUrl: string;
  currentImage?: string;
}

const FileUploader = ({
  fileUrl,
  setFileUrl,
  fieldChange,
  currentImage,
}: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", "jpg", ".jpeg", ".svg"] },
    multiple: false,
    maxFiles: 1,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        {...getRootProps()}
        className="flex justify-center items-center flex-col rounded-xl cursor-pointer bg-gray-200 h-52"
      >
        <input {...getInputProps()} className="cursor-pointer" />
        <div className="flex flex-col items-center gap-3">
          <img src={noImage} alt="file-upload" width={96} height={77} />
          <h3>برای آپلود عکس کلیک کنید</h3>
          <p className="text-sm text-gray-600 font-bold">SVG, JPG, PNG</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200 h-52 rounded-xl">
        {fileUrl || currentImage ? (
          <img
            src={fileUrl || currentImage}
            className="h-52 w-full object-cover rounded-xl"
          />
        ) : (
          <img src={fileUploader} />
        )}
      </div>
    </div>
  );
};

export default FileUploader;
