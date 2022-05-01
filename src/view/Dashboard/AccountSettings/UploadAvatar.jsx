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
  const loggedInUserAvatar = JSON.parse(sessionStorage.getItem("avatar"));

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
    <div style={{ width: "100%", textAlign: "center" }}>
      <img
        src={url || loggedInUserAvatar}
        alt="avatar"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />

      <div style={{ gap: "10px", alignItems: "center", marginTop: "10px" }}>
        <div>
          <input type="file" onChange={handleChange} id="actual-btn" hidden />
          <label
            for="actual-btn"
            style={{
              padding: "5px 10px",
              background: "#0dcaf0",
              cursor: "pointer",
              borderRadius: "5px",
              color: "white",
            }}
          >
            {url ? "Change" : "Choose"} Picture
          </label>
        </div>
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
      </div>
    </div>
  );
};

export default Avatar;
