import React from "react";
import { Upload, message, Button } from "antd";
import { useMutation } from "react-query";
import { UploadPicture } from "../../../api/adminApi";

import { useHistory } from "react-router-dom";

const Avatar = () => {
  const history = useHistory();
  const [file, setFile] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [validate, setValidate] = React.useState(true);
  const formData = new FormData();

  formData.append("avatar", file);

  function handleChange(e) {
    const File = e.target.files[0];
    const isJpgOrPng = File.type === "image/jpeg" || File.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG File!");
      setValidate(true);
      return;
    }
    const isLt2M = File.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      setValidate(true);

      return;
    }
    setFile(File);
    formData.append("avatar", file);
    setValidate(false);

    setUrl(URL.createObjectURL(File));
  }
  const { mutate, isLoading } = useMutation(
    (formData) => UploadPicture(formData),
    {
      onSuccess: (data) => {
        message.success("Your Picture has been uploaded successfully");
        // queryClient.invalidateQueries('')
      },
      onError: () => {
        message.error(
          "an error occurred while uploading, refresh and try again"
        );
      },
    }
  );

  return (
    <>
      {file && !validate && (
        <img src={url} alt="avatar" style={{ width: "100%" }} />
      )}

      <>
        <input type="file" onChange={handleChange} />

        <Button
          type="primary"
          disabled={validate}
          loading={isLoading}
          style={{ marginTop: 16 }}
          formMethod={Upload}
          onClick={() => {
            mutate(formData, {
              onSuccess: (data) => {
                sessionStorage.setItem(
                  "avatar",
                  JSON.stringify(data.data.avatar)
                );
                sessionStorage.setItem("tab", "Overview");

                history.push("/dashboard");
              },
            });
          }}
        >
          {isLoading ? "Uploading" : "Start Upload"}
        </Button>
        <h1>{}</h1>
      </>
    </>
  );
};

export default Avatar;
