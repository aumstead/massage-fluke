import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../../firebase/firebase";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import FileUploader from "react-firebase-file-uploader";
import PictureSvg from "../icons/PictureSvg";
import moment from 'moment'

import styles from "./Create.module.css";

function Create(props) {
  const blogFromLocalStorage = () => {
    if (typeof window === "undefined") return false;

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const router = useRouter();

  // check auth user
  firebase.auth.onAuthStateChanged(function(user) {
    if (!user) {
      router.push("/signin");
    }
  });

  // states
  const [showPreview, setShowPreview] = useState(false);
  const [filenameState, setFilenameState] = useState("");
  const [fileState, setState] = useState({
    image: "",
    isUploading: false,
    progress: 0,
    imageURL: ""
  });
  const [body, setBody] = useState(blogFromLocalStorage);
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    title: "",
    author: "",
    hidePublishButton: false
  });

  const {
    error,
    sizeError,
    success,
    title,
    author,
    hidePublishButton
  } = values;

  // handlers
  const handleChange = name => e => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    setValues({ ...values, [name]: value, error: "" });
  };

  const handleBody = e => {
    setBody(e);
    // save user work to local storage in case page is refreshed or closed
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const publishBlog = e => {
    e.preventDefault();
    const newPost = {
      comments: [],
      title: title,
      author: author,
      body: body,
      imageUrl: fileState.imageURL,
      createdAt: Date.now(),
      date: moment().format("MMMM Do YYYY")
    };
    console.log(newPost);
    firebase.db.collection("posts").add(newPost);
    localStorage.clear("blog")
    router.push("/blog");
  };

  const handleUploadStart = () => setState({ isUploading: true, progress: 0 });
  const handleProgress = progress => setState({ progress });
  const handleUploadError = error => {
    setState({ isUploading: false });
    console.error(error);
  };
  const handleUploadSuccess = filename => {
    setFilenameState(filename);
    setState({ image: filename, progress: 100, isUploading: false });
    firebase.storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => setState({ ...fileState, imageURL: url }));

    setShowPreview(true);
  };

  const handleDelete = e => {
    e.preventDefault();
    let userImageRef = firebase.storage.ref("images").child(filenameState);

    userImageRef
      .delete()
      .then(() => {
        setFilenameState("");
        setShowPreview(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // create blog form
  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className="form-group">
          <label htmlFor="title" className={styles.labelTitle}>
            Title
          </label>
          <input
            type="text"
            className={`${styles.input} ${styles.inputTitle}`}
            value={title}
            name="title"
            onChange={handleChange("title")}
            autoComplete="off"
          />
          <label htmlFor="author" className={styles.labelTitle}>
            Author
          </label>
          <input
            type="text"
            className={styles.input}
            value={author}
            name="author"
            onChange={handleChange("author")}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <ReactQuill
            value={body}
            placeholder="Share your story and experience..."
            onChange={handleBody}
            modules={QuillModules}
            formats={QuillFormats}
          />
        </div>

        <div className={styles.imageContainer}>
          <p className={styles.uploadImage}>Upload a Feature Image</p>
          <FileUploader
            name="featuredImage"
            accept="image/*"
            storageRef={firebase.storage.ref("images")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />
        </div>

        <div>
          <p className={styles.uploadImage}>Image Preview</p>
          {showPreview ? (
            <div className={styles.imagePreviewContainer}>
              <img
                className={styles.imagePreview}
                src={fileState.imageURL}
                alt="user uploaded image"
              />
              <button className={styles.deleteBtn} onClick={handleDelete}>
                Remove image
              </button>
            </div>
          ) : (
            <PictureSvg width="85" height="85" fill="darkgray" />
          )}
        </div>

        <div className={styles.bottomMargin}>
          <button onClick={publishBlog} className={styles.buttonPublish}>
            Publish Blog!
          </button>
        </div>
      </form>
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.space}></div>
      <h1 className={styles.h1}>Write a blog!</h1>
      {createBlogForm()}
    </main>
  );
}

export default Create;

const QuillModules = {
  toolbar: [
    [{ header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"]
  ]
};

const QuillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];
